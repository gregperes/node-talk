const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/node-todo");

module.exports = mongoose;