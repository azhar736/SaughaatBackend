const { addHall } = require("../controllers/hallController");
const router = require("express").Router();

router.post("/addHall", addHall);

module.exports = router;
