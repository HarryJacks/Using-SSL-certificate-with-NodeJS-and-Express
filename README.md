# Using-SSL-certificate-with-NodeJS-and-Express
How to use an SSL certificate with a Node JS server and Express JS.

This is not to be run on it's own. This is a basic example setup. The SSl files need adding and the frontend folder and index.html file are also needed.

Your certificate files should live in the SSL folder and are referenced from the server.js file.

The files would be my-cert-file.crt file and privatekey.pem file.

We then pass these ssl options into the secure server (https) and when we run .listen on this secure server we allow it connections from 443 port only as this is the secure port.

This server would be ran from a server such as an AWS EC2 instance and the firewall settings need to allow inbound connections for ports 80 http and 443 https.

// SSL_options
<pre><code>
var key = fs.readFileSync('SSL/privatekey.pem');
var cert = fs.readFileSync('SSL/my-cert-file.crt');
var ssl_options = {
  key: key,
  cert: cert
};
</code></pre>

// Create http and https servers (with ssl options).
<pre><code>
const server = http.createServer(app);
const secureServer = https.createServer(ssl_options, app);
</code></pre>

// open the servers to specific ports (http: 80 | https: 443).
<pre><code>
secureServer.listen(443, () => console.log(`API running on localhost: 443`));
server.listen(80, () => console.log(`API running on localhost: 80`));
</code>
</pre>
