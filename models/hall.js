const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hallSchema = new Schema({
  noOfSeats: {
    type: String,
    required: true,
  },
  hallImages: {
    type: String,
  },
  bookingSlots: {
    type: String,
  },
  Inverter: {
    type: Boolean,
  },
});

module.exports = mongoose.model("hall", hallSchema);
