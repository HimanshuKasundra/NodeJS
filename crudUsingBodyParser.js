const express = require("express");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());

let data = [
  { id: 1, name: "Yash" },
  { id: 2, name: "Himanshu" },
];

// Get all items
app.get("/", (req, res) => {
  res.json(data);
});

// Get a specific item by ID
app.get("/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = data.find((item) => item.id === itemId);

  if (item) {
    res.json(item);
  } else {
    res.json({ message: "Item not found" });
  }
});

// Create a new item
app.post("/", (req, res) => {
  const { name } = req.body;
  const id = data.length + 1;
  const obj = { id, name };
  data.push(obj);
  res.json(data);
});

// Update an existing item
app.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name } = req.body;
  const index = data.findIndex((item) => item.id === id);
  if (index !== -1) {
    data[index].name = name;
    res.json(data);
  } else {
    res.json({
      message: "Data not found",
    });
  }
});

// Delete an item
app.delete("/:id", (req, res) => {
  const itemId = parseInt(req.params.id);
  data = data.filter((item) => item.id !== itemId);
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server Started @http://localhost:3000");
});
