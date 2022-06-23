const AdoptionProcess = require("../../../models/adoptionProcess");
const Pet = require("../../../models/pet");
const { buildErrObject } = require("../../../middleware/utils");
const { getItem } = require("../../../middleware/db");

/**
 * Registers a new user in database
 * @param {Object} req - request object
 */
const registerAdoptionProcess = async (req = {}, userId) => {
  const pet = await getItem(req.adoptionForm.petId, Pet);
  return new Promise((resolve, reject) => {
    const adoptionProcess = new AdoptionProcess({
      adopterId: userId,
      guardianId: pet.guardian,
      petId: req.adoptionForm.petId,
      process: {
        0: {
          address: req.adoptionForm.address,
          everHadAPet: req.adoptionForm.everHadAPet,
          houseType: req.adoptionForm.houseType,
          petAccess: req.adoptionForm.petAccess,
          timeSpentAtHome: req.adoptionForm.timeSpentAtHome,
          status: "PENDING",
        },
      },
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
