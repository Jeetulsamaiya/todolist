const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost/todoapp").then(function (connection) {
  console.log("database connection established");
})

var todoSchema = mongoose.Schema({
  task: String,
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model("todo", todoSchema)