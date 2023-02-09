const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comment = new Schema({
  user_name: {
    type: String,
    required: [true, "Name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
  home_page: {
    type: String,
    required: false,
  },
  comment: {
    type: String,
    required: [true, "Definitely write something!"],
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});

const Comment = mongoose.model('comments', comment);

module.exports = Comment;