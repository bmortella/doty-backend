const AdoptionProcess = require("../../../models/adoptionProcess.js");
const { buildErrObject } = require("../../../middleware/utils");

/**
 * Registers a new user in database
 * @param {Object} req - request object
 */
const registerAdoptionProcess = (req = {}) => {
  return new Promise((resolve, reject) => {
    const adoptionProcess = new AdoptionProcess({
      //   address: req.address,
      //   everHadAPet: req.everHadAPet,
      //   houseType: req.houseType,
      //   petAccess: req.petAccess,
      //   petId: req.petId,
      //   timeSpentAtHome: req.timeSpentAtHome,
      ...req.adoptionForm,
    });
    adoptionProcess.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message));
      }
      resolve(item);
    });
  });
};

module.exports = { registerAdoptionProcess };
