const { matchedData } = require("express-validator");
const UpdateProcesses = require("../../models/adoptionProcess");
const { isIDGood, handleError } = require("../../middleware/utils");

/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const updateProcesses = async (req, res) => {
  try {
    req = matchedData(req);
    const id = await isIDGood(req.id);
    UpdateProcesses.findOne({ adopter: id }).exec((err, item) => {
      if (err) {
        return reject(buildErrObject(422, err.message));
      }
      res.status(200).json(item);
    });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { updateProcesses };
