const { matchedData } = require("express-validator");
const { handleError } = require("../../middleware/utils");
const { getItem, updateItem } = require("../../middleware/db");
const { petExists } = require("./helpers/petExists");

const Pet = require("../../models/pet");

const editPet = async (req, res) => {
  try {
    const user = req.user;
    req = matchedData(req);

    const pet = await getItem(req._id, Pet);
    if (!pet.guardian.equals(user._id)) {
      return handleError(
        res,
        buildErrObject(403, "PET_DOES_NOT_BELONG_TO_GUARDIAN")
      );
    }

    if (req.name !== pet.name) {
      await petExists(req.name, user._id);
    }

    res.status(200).json(await updateItem(req._id, Pet, req));
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { editPet };
