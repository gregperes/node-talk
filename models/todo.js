const db = require("../config/db");

var Schema = db.Schema;

var TodoSchema = new Schema({
  description : String,
  completed   : Boolean,
  created_at  : Date
});

db.model("Todo", TodoSchema);

module.exports = db.model("Todo");