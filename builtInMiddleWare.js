const express = require("express");
const app = express();
app.use(express.static("img"));

app.get("/img", (req, res) => {
  res.sendFile(__dirname + "/demo.html");
});
app.listen(3000, () => {
  console.log("Server Started @http://localhost:3000");
});
