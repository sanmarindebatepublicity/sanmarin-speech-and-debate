const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

const NOTION_DB_ID = '554e5b45922143a4ab578af12362d8d4';
const NOTION_VERSION = '2022-06-28';
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

let cache = { data: null, ts: 0 };

function extractText(prop) {
  if (!prop) return '';
  if (prop.type === 'title') return (prop.title || []).map(t => t.plain_text).join('');
  if (prop.type === 'rich_text') return (prop.rich_text || []).map(t => t.plain_text).join('');
  return '';
}

function extractSelect(prop) {
  if (!prop || !prop.select) return '';
  return prop.select.name || '';
}

function extractFiles(prop) {
  if (!prop || !prop.files || prop.files.length === 0) return null;
  const f = prop.files[0];
  if (f.type === 'file') return f.file.url;
  if (f.type === 'external') return f.external.url;
  return null;
}

async function fetchFromNotion(token) {
  const url = `https://api.notion.com/v1/databases/${NOTION_DB_ID}/query`;
  console.log('[awards] fetching from Notion DB:', NOTION_DB_ID);

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ page_size: 100 }),
  });

  console.log('[awards] Notion response status:', res.status);

  if (!res.ok) {
    const text = await res.text();
    console.error('[awards] Notion error body:', text);
    throw new Error(`Notion API error ${res.status}: ${text}`);
  }

  const json = await res.json();
  const results = json.results || [];
  console.log('[awards] records returned:', results.length);

  return results.map(page => {
    const p = page.properties || {};
    return {
      id: page.id,
      memberName: extractText(p['Member Names'] || p['Member Name'] || p['Name']),
      awardTitle: extractText(p['Award Title']),
      tournament: extractText(p['Tournament']),
      year: extractSelect(p['Year']),
      achievementLevel: extractSelect(p['Level'] || p['Achievement Level']),
      place: extractSelect(p['Place']),
      photo: extractFiles(p['Photo']),
      description: extractText(p['Description'] || p['Record']),
    };
  }).filter(a => a.memberName).sort((a, b) => {
    if (b.year !== a.year) return b.year.localeCompare(a.year);
    return a.memberName.localeCompare(b.memberName);
  });
}

module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.writeHead(204, CORS_HEADERS);
    res.end();
    return;
  }

  Object.entries(CORS_HEADERS).forEach(([k, v]) => res.setHeader(k, v));

  const token = process.env.NOTION_AWARDS_API_KEY;
  if (!token) {
    console.error('[awards] NOTION_AWARDS_API_KEY is not set in environment');
    return res.status(500).json({ error: 'NOTION_AWARDS_API_KEY is not configured.' });
  }

  try {
    const now = Date.now();
    if (!cache.data || now - cache.ts > CACHE_TTL_MS) {
      cache.data = await fetchFromNotion(token);
      cache.ts = now;
    }
    return res.status(200).json({ awards: cache.data });
  } catch (err) {
    console.error('[awards]', err);
    return res.status(502).json({ error: 'Awards are currently unavailable. Please check back soon.' });
  }
};
