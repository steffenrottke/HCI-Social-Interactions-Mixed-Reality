const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
// Read the HTML file
fs.readFile('index.html', 'utf8', (err, data) => {
if (err) {
res.writeHead(500, { 'Content-Type': 'text/plain' });
res.end('Internal Server Error');
return;
}

// Send the HTML response
res.writeHead(200, { 'Content-Type': 'text/html' });
res.end(data);
});
});

// Start the server on port 3000
server.listen(3000, () => {
console.log('Server listening on http://localhost:3000');
});