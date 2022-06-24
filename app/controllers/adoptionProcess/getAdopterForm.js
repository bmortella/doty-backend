const { matchedData } = require("express-validator");
const AdoptionProcess = require("../../models/adoptionProcess");
const { getItem } = require("../../middleware/db");
const { isIDGood, handleError } = require("../../middleware/utils");

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getAdopterForm = async (req, res) => {
  try {
    req = matchedData(req);
    const id = await isIDGood(req.id);
    AdoptionProcess.findOne({ adopter: id }, (err, item) => {
      if (err) {
        return reject(buildErrObject(422, err.message));
      }
      res.status(200).json(item);
    });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { getAdopterForm };
