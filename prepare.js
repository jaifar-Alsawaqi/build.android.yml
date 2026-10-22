const fs = require('fs');
fs.mkdirSync('www/cairo', { recursive: true });
fs.copyFileSync('index.html', 'www/index.html');
fs.copyFileSync('node_modules/html2canvas/dist/html2canvas.min.js', 'www/html2canvas.min.js');
fs.copyFileSync('node_modules/jspdf/dist/jspdf.umd.min.js', 'www/jspdf.umd.min.js');
// Cairo font: best effort (the app still works with a fallback font if this fails)
try {
  const base = 'node_modules/@fontsource/cairo';
  for (const w of ['400', '600', '700']) fs.copyFileSync(base + '/' + w + '.css', 'www/cairo/' + w + '.css');
  fs.cpSync(base + '/files', 'www/cairo/files', { recursive: true });
} catch (e) { console.log('font copy skipped:', e.message); }
console.log('www ready');
