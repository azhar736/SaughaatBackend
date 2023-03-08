const Hall = require("../models/hall");
const addHall = async (req, res) => {
  const { noOfSeats, hallImages, bookingSlots, Inverter } = req.body;
  try {
    const newHall = await new Hall({
      noOfSeats,
      hallImages,
      bookingSlots,
      Inverter,
    }).save();
    res.send({
      success: true,
      message: "New Hall has been added successfully!",
    });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};

module.exports = { addHall };
