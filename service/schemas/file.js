const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const file = new Schema({
  parentId: {
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
