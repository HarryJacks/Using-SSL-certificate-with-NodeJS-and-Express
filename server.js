const express = require('express');
const path = require('path');
const app = express();
const http = require('http');
const https = require('https');
const bodyParser = require('body-parser');
var fs = require('fs');

// HTTPS STUFF (SSL)
var key = fs.readFileSync('SSL/privatekey.pem');
var cert = fs.readFileSync('SSL/my-cert-file.crt');
var ssl_options = {
  key: key,
  cert: cert
};

// Allows body of api requests to interpret json.
app.use(bodyParser.json());

// sets the static path for files to a folder called "frontend".
app.use(express.static(path.join(__dirname, 'frontend')));

// Default express route which would return an index.html file from the "frontend" folder.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/frontend/index.html'));
});

// Create http and https servers (with ssl options).
const server = http.createServer(app);
const secureServer = https.createServer(ssl_options, app);

// open the servers to specific ports (http: 80 | https: 443).
secureServer.listen(443, () => console.log(`API running on localhost: 443`));
server.listen(80, () => console.log(`API running on localhost: 80`));