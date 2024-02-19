const express = require("express");
const app = express();

app.get("/error", (req, res) => {
  throw new Error("This is a simulated error!");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.send("Get Request Error Handled");
  next();
});

app.post("/submit", (req, res) => {
  throw new Error("Post Error");
});

app.use((err, req, res, next) => {
  console.log(err);
  res.send("Post Request Error Handled");
});

app.listen(3000, () => {
  console.log("Server Started @http://localhost:3000");
});
