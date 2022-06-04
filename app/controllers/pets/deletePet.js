const Pet = require("../../models/pet");
const { matchedData } = require("express-validator");
const { isIDGood, handleError } = require("../../middleware/utils");
const { deleteItem, getItem } = require("../../middleware/db");

const { buildErrObject } = require("../../middleware/utils");

/**
 * Delete item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const deletePet = async (req, res) => {
  try {
    const user = req.user;
    req = matchedData(req);
    const id = await isIDGood(req.id);
    const item = await getItem(id, Pet);

    if (!item.guardian.equals(user._id)) {
      return handleError(
        res,
        buildErrObject(403, "PET_DOES_NOT_BELONG_TO_GUARDIAN")
      );
    }

    res.status(200).json(await deleteItem(id, Pet));
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { deletePet };
