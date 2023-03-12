const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const hallSchema = new Schema({
  name: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  noOfSeats: {
    type: String,
  },
  hallImages: {
    type: String,
  },
  availableSlots: [
    {
      date: { type: Date, required: true },
      startTime: { type: Number, required: true },
      endTime: { type: Number, required: true },
      seats: { type: Number, required: true },
    },
  ],
  Inverter: {
    type: Boolean,
  },
  foodMenu: [
    {
      foodItem: { type: String },
    },
  ],
});

module.exports = mongoose.model("hall", hallSchema);
