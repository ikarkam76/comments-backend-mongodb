const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const file = new Schema({
  parent_id: {
    type: String,
    required: true,
  },
  file: {
    type: String,
    required: true,
  },
});

const File = mongoose.model("files", file);

module.exports = File;
