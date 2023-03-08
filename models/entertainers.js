const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const entertainerSchema = new Schema({
  packageName: {
    type: String,
    required: true,
  },
  packagePrice: {
    type: String,
    required: true,
  },
  teamMembers: {
    type: String,
    required: true,
  },
  availableSlots: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("entertainer", entertainerSchema);
