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

const getAllHall = async (req, res) => {
  try {
    const allHall = await Hall.find();
    res.send({ success: true, data: allHall });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};

const getSingleHall = async (req, res) => {
  const id = req.params.id;
  console.log("This is a singleHall ID:", id);
  try {
    const singleHall = await Hall.findById(id);
    if (singleHall) {
      res.send({ success: true, data: singleHall });
    } else {
      res.send({ success: false, message: "Hall not found" });
    }
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};

const getFilteredHall = async (req, res) => {
  const { minPrice, maxPrice, minRating, timeSlots, seats } = req.query;
  const query = {};
  if (minPrice) query.price = { $gte: minPrice };
  if (maxPrice) {
    query.price = query.price || {};
    query.price.$lte = maxPrice;
  }
  if (minRating) query.rating = { $gte: minRating };
  if (timeSlots) {
    const slots = JSON.parse(timeSlots);
    query.availableSlots = { $elemMatch: { ...slots } };
  }
  if (seats) {
    query.availableSlots = query.availableSlots || {};
    query.availableSlots.$elemMatch = { seats: { $gte: seats } };
  }
  const halls = await Hall.find(query);
  res.json(halls);
};

const deleteHall = async (req, res) => {
  const { id } = req.body;
  try {
    const deleteHall = await Hall.findByIdAndDelete(id);
    if (deleteHall)
      res.send({ success: true, message: "Hall deleted successfully!" });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};

const addMenu = async (req, res) => {
  const { foodMenu } = req.body;
  console.log(foodMenu);
  try {
    const newMenu = await new Hall({
      foodMenu,
    }).save();
    res.send({ success: true, message: "Menu added successfully!" });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
module.exports = {
  addHall,
  getAllHall,
  getSingleHall,
  getFilteredHall,
  deleteHall,
  addMenu,
};
