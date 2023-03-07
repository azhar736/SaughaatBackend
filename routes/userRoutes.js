const { registerUser, loginUser } = require("../controllers/userController");
const router = require("express").Router();
router.post("/register", registerUser);
router.get("/login", loginUser);

module.exports = router;
