const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const JWT_SCRET = process.env.JWT_SCRET;
const User = require("../models/user");
const registerUser = async (req, res) => {
  const { fullName, email, password, confirmPassword, role } = req.body;
  console.log(req.body);
  try {
    const existUser = await User.findOne({ email: email });
    if (existUser) {
      res.send({ success: false, message: "User already exist" });
    } else {
      if (password !== confirmPassword) {
        res.sen({ success: false, message: "password do not match" });
      }
      const salt = bcrypt.genSaltSync(10);
      const hashPass = bcrypt.hashSync(password, salt);
      const newUser = await new User({
        fullName: fullName,
        email: email,
        password: hashPass,
        role: role,
      }).save();
      res.send({ sucess: true, data: newUser });
    }
  } catch (error) {
    console.log(error.message);
    res.send({ success: false, message: "Internal server error" });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ error: "Please try to login with correct credentials.." });
    }
    const passCompare = await bcrypt.compare(password, user.password);
    if (!passCompare) {
      return res
        .status(400)
        .json({ err: "Please try to login with correct credentials" });
    }
    const data = {
      user: {
        id: user.id,
      },
    };
    const token = jwt.sign(data, JWT_SCRET);
    res.json({ success: true, data: user, authToke: token });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const editUser = async (req, res) => {
  const id = req.body.id;
  const data = req.body;
  // console.log(id);
  // console.log(data);
  try {
    const newUser = await User.findByIdAndUpdate(id, data, {
      new: true,
    });
    res.send({
      success: true,
      data: newUser,
      message: "User has been Updated Successfully!",
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findByIdAndDelete(id);
    if (user) {
      res.send({
        success: true,
        message: "User has been Deleted Successfully!",
      });
    } else {
      res.send({ success: false, message: "User didn't Exist!" });
    }
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};

const allUsers = async (req, res) => {
  try {
    const allUser = await User.find();
    res.send({ success: true, data: allUser });
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
const signgleUser = async (req, res) => {
  const { id } = req.body;
  try {
    const user = await User.findOne({ _id: id });
    if (user) {
      res.send({ success: true, data: user });
    } else {
      res.send({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.send({ success: false, message: error.message });
  }
};
module.exports = {
  registerUser,
  loginUser,
  deleteUser,
  editUser,
  allUsers,
  signgleUser,
};
