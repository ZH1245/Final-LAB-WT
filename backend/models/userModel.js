const mongoose = require("mongoose");

const UserModel = mongoose.Schema({
  firstName: { type: String, required: true, trim: true },
  lastName: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  role: { type: String, default: "admin" },
});

module.exports = mongoose.model("userModel", UserModel);
