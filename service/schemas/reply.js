const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reply = new Schema({
  parent_id: {
    type: String,
    required: true,
  },
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
  reply: {
    type: String,
    required: [true, "Definitely write something!"],
  },
  time: {
    type: Date,
    default: Date.now(),
  },
});

const Reply = mongoose.model('replies', reply);

module.exports = Reply;