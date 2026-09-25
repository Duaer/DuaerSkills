import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('./public/', import.meta.url));
const port = Number(process.env.PORT || 8091);
const types = {
	'.html': 'text/html; charset=utf-8',
	'.css': 'text/css; charset=utf-8',
	'.svg': 'image/svg+xml',
	'.txt': 'text/plain; charset=utf-8',
	'.md': 'text/markdown; charset=utf-8',
	'.xml': 'application/xml; charset=utf-8',
};

createServer(async (req, res) => {
	const url = new URL(req.url || '/', `http://127.0.0.1:${port}`);
	let path = normalize(decodeURIComponent(url.pathname));
	if (path.includes('..')) {
		res.writeHead(403);
		res.end();
		return;
	}
	if (!extname(path)) {
		if (!path.endsWith('/')) path += '/';
		path += 'index.html';
	}
	const file = join(root, path.replace(/^\/+/, ''));
	if (!file.startsWith(root)) {
		res.writeHead(403);
		res.end();
		return;
	}
	try {
		const body = await readFile(file);
		res.writeHead(200, { 'content-type': types[extname(file)] || 'application/octet-stream' });
		res.end(body);
	} catch {
		const zh = url.pathname === '/zh' || url.pathname.startsWith('/zh/');
		const missing = await readFile(join(root, zh ? 'zh/404.html' : '404.html'));
		res.writeHead(404, { 'content-type': 'text/html; charset=utf-8' });
		res.end(missing);
	}
}).listen(port, '127.0.0.1', () => {
	console.log(`http://127.0.0.1:${port}`);
});
