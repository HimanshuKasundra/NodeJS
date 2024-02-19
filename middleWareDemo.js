const express = require("express");

const app = express();

const isUserAuthenticated = (req, res, next) => {
  console.log("Check Authentication");
  next();
};

const isUserAuthorized = (req, res, next) => {
  console.log("Check Authorization");
  next();
};

app.get("/", [
  isUserAuthenticated,
  isUserAuthorized,
  (req, res) => {
    res.send("Welcome to home Page");
  },
]);

app.get("/about", [
  isUserAuthenticated,
  isUserAuthorized,
  (req, res) => {
    res.send("Welcome to about Page");
  },
]);

app.listen(3000, () => {
  console.log("Server Started @http://localhost:3000");
});
