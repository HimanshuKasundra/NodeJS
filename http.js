const http = require("http");

const server = http.createServer((req, res) => {
  // Get Method
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Get Method Called");
  }
  // Post Method
  else if (req.method === "POST" && req.url === "/submit") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Post Method Called");
  }
  // Put Method
  else if (req.method === "PUT" && req.url.startsWith("/update/")) {
    const id = req.url.split("/")[2];
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Put Method Called with ${id}`);
  }
  // Delete Method
  else if (req.method === "DELETE" && req.url.startsWith("/delete/")) {
    const id = req.url.split("/")[2];
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(`Delete Method Called with ${id}`);
  }
  // other
  else {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("None");
  }
});

server.listen(3001, () => {
  console.log("server started @http://localhost:3000");
});
