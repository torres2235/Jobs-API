const bcrypt = require("bcryptjs/dist/bcrypt");
const mongoose = require("mongoose");
// import our jwt
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide name"],
    minlengh: 3,
    maxlength: 50,
  },
  email: {
    type: String,
    required: [true, "Please provide email"],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Please provide a valid email",
    ],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please provide password"],
    minlengh: 6,
  },
});

UserSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.createJWT = function () {
  return jwt.sign(
    { userId: this._id, name: this.name },
    process.env.JWT_SECRET,
    {
      expiresIn: process.env.JWT_LIFETIME,
    }
  );
};

// we'll add that functionality here
UserSchema.methods.comparePassword = async function (canditatePassword) {
  // compare the inputed password (candidatatePassword) with the one in the DB (this.password)
  const isMatch = await bcrypt.compare(canditatePassword, this.password);
  return isMatch;
};

module.exports = mongoose.model("User", UserSchema);
