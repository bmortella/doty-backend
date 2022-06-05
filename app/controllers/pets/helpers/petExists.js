const { buildErrObject } = require("../../../middleware/utils");
const Pet = require("../../../models/pet");

const petExists = (name, guardian, adopted = false) => {
  return new Promise((resolve, reject) => {
    Pet.findOne({ name, guardian, adopted }, (err, item) => {
      if (err) {
        return reject(buildErrObject(422, err.message));
      }

      if (item) {
        return reject(buildErrObject(422, "PET_ALREADY_EXISTS"));
      }

      resolve(false);
    });
  });
};

module.exports = { petExists };
