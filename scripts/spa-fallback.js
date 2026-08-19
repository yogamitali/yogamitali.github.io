/*
 * GitHub Pages serves static files only -- it has no router, so a visit straight to
 * /classes or /about would 404 before React ever loads. Fixed by writing a copy of
 * index.html at each route's own path, so GitHub Pages finds a real file and answers
 * 200 OK. React Router then reads the URL and renders the right page.
 *
 * 404.html is the catch-all: any genuinely unknown path still loads the app, which
 * shows our own "Something's not right." page instead of GitHub's grey error screen.
 *
 * Runs automatically after `npm run build`.
 */
const fs = require('fs');
const path = require('path');

const build = path.join(__dirname, '..', 'build');
const index = path.join(build, 'index.html');

// Keep in sync with the <Route> paths in src/app.jsx
const ROUTES = ['about', 'classes', 'testimonials'];

if (!fs.existsSync(index)) {
  console.error('spa-fallback: build/index.html not found -- did the build succeed?');
  process.exit(1);
}

const html = fs.readFileSync(index);

fs.writeFileSync(path.join(build, '404.html'), html);
console.log('spa-fallback: wrote 404.html');

for (const route of ROUTES) {
  const dir = path.join(build, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`spa-fallback: wrote ${route}/index.html`);
}
