const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const image = new Schema({
  parent_id: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Image = mongoose.model("image", image);

module.exports = Image;
