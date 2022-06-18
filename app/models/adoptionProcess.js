const mongoose = require("mongoose");
const validator = require("validator");
const mongoosePaginate = require("mongoose-paginate-v2");

const adoptionProcessSchema = new mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    everHadAPet: {
      type: String,
      required: true,
    },
    houseType: {
      type: String,
      required: true,
    },
    petAccess: {
      type: String,
      required: true,
    },
    petId: {
      type: mongoose.Types.ObjectId,
      ref: "Pet",
      require: true,
    },
    timeSpentAtHome: {
      type: String,
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("adoptionProcess", adoptionProcessSchema);
