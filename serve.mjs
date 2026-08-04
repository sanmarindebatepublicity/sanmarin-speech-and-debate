import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = parseInt(process.env.PORT) || 3000;
const require = createRequire(import.meta.url);

// Load .env into process.env (no external deps)
function loadEnv() {
  try {
    const raw = fs.readFileSync(path.join(__dirname, '.env'), 'utf8');
    for (const line of raw.split('\n')) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eq = trimmed.indexOf('=');
      if (eq < 0) continue;
      const key = trimmed.slice(0, eq).trim();
      const val = trimmed.slice(eq + 1).trim();
      if (key && process.env[key] === undefined) process.env[key] = val;
    }
  } catch (_) {}
}

loadEnv();

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.mjs': 'application/javascript',
  '.pdf': 'application/pdf',
  '.webp': 'image/webp',
  '.avif': 'image/avif',
};

// Minimal Express-compatible response wrapper for Vercel-style handlers
function wrapRes(nativeRes) {
  let _status = 200;
  const res = {
    writeHead(code, headers) { nativeRes.writeHead(code, headers); return res; },
    setHeader(k, v) { nativeRes.setHeader(k, v); return res; },
    status(code) { _status = code; return res; },
    json(data) {
      if (!nativeRes.headersSent) nativeRes.writeHead(_status, { 'Content-Type': 'application/json' });
      nativeRes.end(JSON.stringify(data));
      return res;
    },
    end(...args) { nativeRes.end(...args); return res; },
  };
  return res;
}

http.createServer(async (req, res) => {
  let urlPath = req.url.split('?')[0];
  // Decode %20 etc. so files with spaces/& in their names resolve (matches production behavior)
  try { urlPath = decodeURIComponent(urlPath); } catch (e) { res.writeHead(400); res.end('Bad request'); return; }

  // Route /api/* requests to api/<name>.js handlers
  if (urlPath.startsWith('/api/')) {
    const name = urlPath.slice(5).replace(/\/$/, '') || 'index';
    const handlerPath = path.join(__dirname, 'api', name + '.js');

    if (!fs.existsSync(handlerPath)) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'API route not found' }));
      return;
    }

    try {
      let body = '';
      req.on('data', chunk => { body += chunk; });
      await new Promise(resolve => req.on('end', resolve));

      const handler = require(handlerPath);
      await handler(req, wrapRes(res));
    } catch (e) {
      console.error('[serve] API handler error:', e);
      if (!res.headersSent) {
        res.writeHead(500, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ error: 'Internal server error' }));
      }
    }
    return;
  }

  const filePath = path.join(__dirname, urlPath === '/' ? '/index.html' : urlPath);
  // Block path traversal (../) and dotfiles (.env, .gitignore, …)
  const rel = path.relative(__dirname, filePath);
  if (rel.startsWith('..') || path.isAbsolute(rel) || rel.split(path.sep).some(seg => seg.startsWith('.'))) {
    res.writeHead(404); res.end('Not found');
    return;
  }
  const ext = path.extname(filePath);
  fs.readFile(filePath, (err, data) => {
    if (err) { res.writeHead(404); res.end('Not found'); return; }
    res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
