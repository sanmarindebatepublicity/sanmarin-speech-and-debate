const { google } = require('googleapis');

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

function respond(res, status, body) {
  res.status(status).json(body);
}

function getAuth() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) throw new Error('GOOGLE_SERVICE_ACCOUNT_JSON env var is not set');
  const creds = JSON.parse(raw);
  return new google.auth.GoogleAuth({
    credentials: creds,
    scopes: ['https://www.googleapis.com/auth/drive.readonly'],
  });
}

// Returns all subfolders of the parent folder as [{ id, name }], sorted newest-season-first
async function listSeasons(drive) {
  const parentId = process.env.GDRIVE_PARENT_FOLDER_ID;
  if (!parentId) throw new Error('GDRIVE_PARENT_FOLDER_ID env var is not set');

  const res = await drive.files.list({
    q: `'${parentId}' in parents and mimeType = 'application/vnd.google-apps.folder' and trashed = false`,
    fields: 'files(id, name)',
    orderBy: 'name desc',
    pageSize: 100,
  });

  return (res.data.files || []).map(f => ({ id: f.id, name: f.name }));
}

// Returns all image files in a folder as [{ id, name, url }]
async function listPhotos(drive, folderId) {
  const IMAGE_MIME = [
    'image/jpeg', 'image/png', 'image/gif',
    'image/webp', 'image/heic', 'image/heif',
  ];
  const mimeFilter = IMAGE_MIME.map(m => `mimeType = '${m}'`).join(' or ');

  let photos = [];
  let pageToken;

  do {
    const res = await drive.files.list({
      q: `'${folderId}' in parents and (${mimeFilter}) and trashed = false`,
      fields: 'nextPageToken, files(id, name)',
      orderBy: 'name',
      pageSize: 200,
      ...(pageToken ? { pageToken } : {}),
    });

    const files = res.data.files || [];
    files.forEach(f => {
      photos.push({
        id: f.id,
        name: f.name,
        // Direct thumbnail URL — no auth needed for publicly shared drive files
        url: `https://drive.google.com/thumbnail?id=${f.id}&sz=w1200`,
        fullUrl: `https://drive.google.com/uc?export=view&id=${f.id}`,
      });
    });

    pageToken = res.data.nextPageToken;
  } while (pageToken);

  return photos;
}

module.exports = async function handler(req, res) {
  // Preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS_HEADERS);
    res.end();
    return;
  }

  Object.entries(CORS_HEADERS).forEach(([k, v]) => res.setHeader(k, v));

  try {
    const auth = getAuth();
    const drive = google.drive({ version: 'v3', auth });

    const { type, folderId } = req.query;

    if (type === 'seasons') {
      const seasons = await listSeasons(drive);
      return respond(res, 200, { seasons });
    }

    if (folderId) {
      const photos = await listPhotos(drive, folderId);
      return respond(res, 200, { photos });
    }

    return respond(res, 400, { error: 'Provide ?type=seasons or ?folderId=<id>' });
  } catch (err) {
    console.error('[get-photos]', err);
    return respond(res, 500, { error: err.message });
  }
};
