const mongoose = require("mongoose");

const adoptionProcessSchema = new mongoose.Schema(
  {
    petId: {
      type: mongoose.Types.ObjectId,
      ref: "Pet",
      required: true,
    },
    guardianId: {
      type: mongoose.Types.ObjectId,
      ref: "Guardian",
      required: true,
    },
    adopterId: {
      type: mongoose.Types.ObjectId,
      ref: "Adopter",
      required: true,
    },
    process: {
      type: Object,
      default: {},
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("adoptionProcess", adoptionProcessSchema);
