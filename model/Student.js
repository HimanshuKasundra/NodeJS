// Importing Mongoose library
const mongoose = require("mongoose");

// Creating a Mongoose schema for the 'Student' model
const schema = mongoose.Schema({
  id: Number, // Defining a field for student ID of type Number
  name: String, // Defining a field for student name of type String
});

// Exporting the 'Student' model with the defined schema
module.exports = mongoose.model("Student", schema);