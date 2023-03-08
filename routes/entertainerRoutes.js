const { addNewPackage } = require("../controllers/entertainerController");

const router = require("express").Router();

router.post("/addPackage", addNewPackage);

module.exports = router;
