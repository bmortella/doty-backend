const mongoose = require("mongoose");

const adoptionProcessSchema = new mongoose.Schema(
  {
    pet: {
      type: mongoose.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
    guardianId: {
      type: mongoose.Types.ObjectId,
      ref: "Guardian",
      required: true,
    },
    adopter: {
      type: mongoose.Types.ObjectId,
      ref: "Adopter",
      required: true,
    },
    process: {
      type: Object,
      default: {},
    },
    stage: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: "PENDING",
    },
    started: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("adoptionProcess", adoptionProcessSchema);
