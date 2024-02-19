const fs = require("fs");
const express = require("express");

fs.writeFileSync("home.txt", "<h1>Home Page</h1>");
fs.writeFileSync("about.txt", "<h1>Abour Page</h1>");
fs.writeFileSync("contact.txt", "<h1>Contact Page</h1>");

const app = express();

app.get("/", (req, res) => {
  res.send(fs.readFileSync("home.txt", "utf-8"));
});

app.get("/about", (req, res) => {
  res.send(fs.readFileSync("about.txt", "utf-8"));
});

app.get("/contact", (req, res) => {
  res.send(fs.readFileSync("contact.txt", "utf-8"));
});

app.listen(3000, () => {
  console.log("Server Started @http://localhost:3000");
});
