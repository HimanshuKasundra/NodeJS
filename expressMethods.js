const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Get Method");
});

app.post("/submit", (req, res) => {
  res.send("Post Method");
});

app.put("/update/:id", (req, res) => {
  res.send(`Put Method With ${req.url.split("/")[2]}`);
});

app.delete("/delete/:id", (req, res) => {
  res.send(`Delete Method With ${req.url.split("/")[2]}`);
});

app.listen(3000, () => {
  console.log("Server Started @http://localhost:3000");
});
