const http = require("http");
const fs = require("fs");

fs.writeFileSync("home.html", "<h1>Welcome to Home</h1>");
fs.writeFileSync("about.html", "<h1>About Us</h1>");
fs.writeFileSync("contact.html", "<h1>Contact Us</h1>");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    const data = fs.readFileSync("./home.html", "utf-8");
    res.end(data);
  } else if (req.url === "/about") {
    const data = fs.readFileSync("./about.html", "utf-8");
    res.end(data);
  } else if (req.url === "/contact") {
    const data = fs.readFileSync("./contact.html", "utf-8");
    res.end(data);
  } else {
    res.end("Not Found");
  }
});

server.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`);
});
