# Using-SSL-certificate-with-NodeJS-and-Express
How to use an SSL certificate with a Node JS server and Express JS.

This is not to be run on it's own. This is a basic example setup. The SSl files need adding and the frontend folder and index.html file are also needed.

Your certificate files should live in the SSL folder and are referenced from the server.js file.

The files would be my-cert-file.crt file and privatekey.pem file.

We then pass these ssl options into the secure server (https) and when we run .listen on this secure server we allow it connections from 443 port only as this is the secure port.

This server would be ran from a server such as an AWS EC2 instance and the firewall settings need to allow inbound connections for ports 80 http and 443 https.