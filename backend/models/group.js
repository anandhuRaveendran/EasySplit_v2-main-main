const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  members: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Friend' }],
  currency: { type: String, required: true },
});

const Group = mongoose.model('Group', groupSchema);

module.exports = Group;
