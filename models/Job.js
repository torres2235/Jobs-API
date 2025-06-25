const mongoose = require("mongoose");

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide company name"],
      maxlenght: 50,
    },
    position: {
      type: String,
      required: [true, "Please provide position namme"],
      maxlenght: 200,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending", "ghosted"],
      default: "pending",
    },
    // this ties our Job model to our User model
    // very important!!
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Job", JobSchema);
