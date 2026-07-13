const fs = require('fs');
const html = fs.readFileSync('./index.html', 'utf8');
const m = html.match(/<script>([\s\S]*?)<\/script>/);
if (!m) throw new Error('No script block found');
try {
  new Function(m[1]);
  console.log('OK - sintaxis JS correcta');
} catch (e) {
  console.error('ERROR de sintaxis:', e.message);
  process.exit(1);
}
