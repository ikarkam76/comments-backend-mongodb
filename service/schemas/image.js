const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const image = new Schema({
  parentId: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model("images", image);

module.exports = Image;
