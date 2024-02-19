const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Get Method");
});

app.get("/about", (req, res) => {
  res.send("About");
});

app.get(/a/, (req, res) => {
  res.send("asdfghjkSS");
});

app.listen(3000, () => {
  console.log("Server Started @http://localhost:3000");
});
