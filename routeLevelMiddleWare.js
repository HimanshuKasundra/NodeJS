const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log(`Request received at ${new Date()}`);
  next();
});

const specialDishMiddleware = (req, res, next) => {
  if (req.query.special === "true") {
    console.log("Special dish ordered!");
    next();
  } else {
    res.send("Sorry, the special dish is not available for you.");
  }
};

app.get("/order-special-dish", specialDishMiddleware, (req, res) => {
  res.send("Special dish is being prepared for you!");
});

app.get("/regular-dish", (req, res) => {
  res.send("You ordered a regular dish.");
});

app.listen(3000, () => {
  console.log("Server Started @http://localhost:3000");
});
