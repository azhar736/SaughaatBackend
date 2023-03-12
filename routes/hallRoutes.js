const {
  addHall,
  getAllHall,
  getSingleHall,
  getFilteredHall,
  deleteHall,
  addMenu,
} = require("../controllers/hallController");
const router = require("express").Router();

router.post("/addHall", addHall);
router.post("/addMenu", addMenu);
router.get("/getAllHall", getAllHall);
router.post("/getSingleHall/:id", getSingleHall);
router.get("/getFilteredHall", getFilteredHall);
router.delete("/deleteHall", deleteHall);

module.exports = router;
