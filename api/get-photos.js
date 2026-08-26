/**
 * GET /api/get-photos
 *
 * Lists the image files sitting directly inside one Google Drive folder and
 * returns them newest first, for the Events & Media carousel.
 *
 * Drive is the source of truth. Club members upload straight into the folder
 * and the photo shows up on the site after the short cache expires. Nothing in
 * this repository needs editing to add or remove a photo.
 *
 * Server-side only. Requires two environment variables:
 *
 *   GOOGLE_SERVICE_ACCOUNT_JSON    the service-account key, as one JSON string
 *   GOOGLE_DRIVE_GALLERY_FOLDER_ID the folder to read
 *
 * Neither is ever sent to the browser. The folder ID in particular stays
 * server-side: the browser only receives finished image URLs.
 *
 * Response shape:
 *   { "photos": [ { "id", "name", "url", "fullUrl" } ] }
 */

const { google } = require('googleapis');

const DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.readonly';

// Only these are treated as gallery images. Anything else in the folder
// (documents, videos, subfolders) is ignored.
const IMAGE_MIME_TYPES = [
  'image/jpeg',
  'image/png',
  'image/gif',
  'image/webp',
  'image/heic',
  'image/heif',
];

// Widths requested from Drive's image host.
const CAROUSEL_WIDTH = 1200;
const MODAL_WIDTH = 2048;

const PAGE_SIZE = 200;
const MAX_PAGES = 25; // hard stop so a pathological folder cannot loop forever

/** Drive file IDs are URL-safe tokens. Anything else is not ours to echo back. */
function isSafeDriveId(id) {
  return typeof id === 'string' && /^[A-Za-z0-9_-]{10,128}$/.test(id);
}

/**
 * Drive's thumbnailLink ends in a sizing token such as `=s220`. Swapping that
 * token is how we ask its image host for a larger render.
 *
 * These links are short-lived and signed, which is the point: they display in a
 * browser without the folder having to be public to the world.
 */
function resizeThumbnail(link, spec) {
  if (typeof link !== 'string' || link === '') return null;
  const eq = link.lastIndexOf('=');
  // Only the trailing segment is a size token; an '=' inside the path is not.
  if (eq > -1 && link.indexOf('/', eq) === -1) return link.slice(0, eq) + '=' + spec;
  return link + '=' + spec;
}

/** Fallback for the rare file Drive returns without a thumbnailLink. */
function fallbackUrl(id, width) {
  return 'https://drive.google.com/thumbnail?id=' + encodeURIComponent(id) + '&sz=w' + width;
}

function getAuth() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error('CONFIG: GOOGLE_SERVICE_ACCOUNT_JSON is not set');

  let credentials;
  try {
    credentials = JSON.parse(raw);
  } catch (e) {
    throw new Error('CONFIG: GOOGLE_SERVICE_ACCOUNT_JSON is not valid JSON');
  }

  return new google.auth.GoogleAuth({ credentials, scopes: [DRIVE_SCOPE] });
}

/** Every image directly inside the folder, following pagination to the end. */
async function listFolderImages(drive, folderId) {
  const mimeFilter = IMAGE_MIME_TYPES.map((m) => "mimeType = '" + m + "'").join(' or ');
  const q = "'" + folderId + "' in parents and (" + mimeFilter + ') and trashed = false';

  const files = [];
  let pageToken;
  let pages = 0;

  do {
    const params = {
      q,
      fields: 'nextPageToken, files(id, name, mimeType, createdTime, modifiedTime, thumbnailLink)',
      orderBy: 'createdTime desc',
      pageSize: PAGE_SIZE,
      spaces: 'drive',
      supportsAllDrives: true,
      includeItemsFromAllDrives: true,
    };
    if (pageToken) params.pageToken = pageToken;

    const res = await drive.files.list(params);
    if (Array.isArray(res.data.files)) files.push(...res.data.files);

    pageToken = res.data.nextPageToken;
    pages += 1;
  } while (pageToken && pages < MAX_PAGES);

  return files;
}

/** Newest first. Drive already sorts, but pages are merged so re-sort to be sure. */
function newestFirst(a, b) {
  const at = Date.parse(a.createdTime || a.modifiedTime || '') || 0;
  const bt = Date.parse(b.createdTime || b.modifiedTime || '') || 0;
  return bt - at;
}

function toPhoto(file) {
  return {
    id: file.id,
    name: typeof file.name === 'string' ? file.name : '',
    url: resizeThumbnail(file.thumbnailLink, 'w' + CAROUSEL_WIDTH) || fallbackUrl(file.id, CAROUSEL_WIDTH),
    fullUrl: resizeThumbnail(file.thumbnailLink, 'w' + MODAL_WIDTH) || fallbackUrl(file.id, MODAL_WIDTH),
  };
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    });
    res.end();
    return;
  }

  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');

  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET, OPTIONS');
    return res.status(405).json({ error: 'Method not allowed.' });
  }

  try {
    const folderId = process.env.GOOGLE_DRIVE_GALLERY_FOLDER_ID;
    if (!folderId) throw new Error('CONFIG: GOOGLE_DRIVE_GALLERY_FOLDER_ID is not set');
    if (!isSafeDriveId(folderId)) throw new Error('CONFIG: GOOGLE_DRIVE_GALLERY_FOLDER_ID is malformed');

    const drive = google.drive({ version: 'v3', auth: getAuth() });
    const files = await listFolderImages(drive, folderId);

    const photos = files
      .filter((f) => f && isSafeDriveId(f.id))
      .sort(newestFirst)
      .map(toPhoto);

    // Short cache: a newly uploaded photo appears within about a minute, while
    // repeat visitors in that window are served from cache.
    res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=300');
    return res.status(200).json({ photos });
  } catch (err) {
    // Full detail to the server log, nothing identifying to the visitor.
    console.error('[get-photos]', err && err.message ? err.message : err);
    res.setHeader('Cache-Control', 'no-store');
    return res.status(500).json({ error: 'Unable to load photos right now.' });
  }
};
