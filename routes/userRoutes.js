const {
  registerUser,
  loginUser,
  deleteUser,
  editUser,
  allUsers,
  signgleUser,
} = require("../controllers/userController");
const router = require("express").Router();
router.post("/registerUser", registerUser);
router.get("/loginUser", loginUser);
router.get("/allUsers", allUsers);
router.get("/signgleUser", signgleUser);
router.patch("/editUser", editUser);
router.delete("/deleteUser", deleteUser);

module.exports = router;
