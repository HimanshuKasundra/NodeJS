const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  if (!req.body.name || !req.body.email) {
    return res.json({ message: "Name and email are required!" });
  }
  req.body.email = req.body.email.trim().toLowerCase();
  next();
});

app.post("/submit-form", (req, res) => {
  const { name, email } = req.body;
  res.json({ name, email });
});

app.listen(3000, () => {
  console.log("Server Started @http://localhost:3000");
});
