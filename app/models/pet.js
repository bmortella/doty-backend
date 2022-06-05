const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate-v2");

const PetSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    guardian: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    adopted: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

PetSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Pet", PetSchema);
