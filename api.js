// Importing required libraries
const mongoose = require("mongoose"); // Importing Mongoose for MongoDB interactions
const express = require("express"); // Importing Express for web application framework
const bodyParser = require("body-parser"); // Importing body-parser for parsing incoming request bodies
const Student = require("./model/Student"); // Importing the Student model from the specified path

// Connecting to MongoDB database named "Collage"
mongoose.connect("mongodb://localhost:27017/Collage").then(() => {
  console.log("Connection Successfully Established"); // Logging successful database connection

  // Creating an Express application
  const app = express();

  // Adding middleware to parse incoming request bodies
  app.use(bodyParser.urlencoded());

  // Handling GET request to retrieve all student data
  app.get("/data", async (req, res) => {
    const data = await Student.find(); // Retrieving all student records from the database
    res.json(data); // Sending the retrieved data as JSON response
  });

  // Handling GET request to retrieve a specific student's data by ID
  app.get("/data/:id", async (req, res) => {
    const data = await Student.findOne({ id: req.params.id }); // Retrieving a specific student's record by ID
    res.json(data); // Sending the retrieved data as JSON response
  });

  // Handling POST request to add a new student record
  app.post("/data", async (req, res) => {
    const student = Student(); // Creating a new instance of the Student model
    const { id, name } = req.body; // Extracting ID and name from the request body
    student.id = id; // Assigning ID to the student instance
    student.name = name; // Assigning name to the student instance
    const data = await student.save(); // Saving the new student record to the database
    res.json(data); // Sending the saved data as JSON response
  });

  // Handling PUT request to update a specific student's record by ID
  app.put("/data/:id", async (req, res) => {
    const data = await Student.findOne({ id: req.params.id }); // Retrieving a specific student's record by ID
    const { name } = req.body; // Extracting updated name from the request body
    data.name = name; // Updating the name in the retrieved student record
    await data.save(); // Saving the updated student record to the database
    res.json(data); // Sending the updated data as JSON response
  });

  // Handling DELETE request to remove a specific student's record by ID
  app.delete("/data/:id", async (req, res) => {
    const data = await Student.deleteOne({ id: req.params.id }); // Deleting a specific student's record by ID
    res.json(data); // Sending the deletion status as JSON response
  });

  // Starting the server and logging the server URL
  app.listen(3000, () => {
    console.log("Server Started @http://localhost:3000");
  });
});