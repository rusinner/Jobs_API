const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  //create user
  const user = await User.create({ ...req.body });
  //create token
  const token = jwt.sign({ userId: user._id, naem: user.name }, "jwtsecret", {
    expiresIn: "30d",
  });
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

const login = async (req, res) => {
  res.send("login user");
};

module.exports = {
  register,
  login,
};
