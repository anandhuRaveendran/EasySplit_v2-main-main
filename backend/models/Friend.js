const mongoose = require('mongoose');

const friendSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  upi: { type: String, required: true },
});

const Friend = mongoose.model('Friend', friendSchema);

module.exports = Friend;


