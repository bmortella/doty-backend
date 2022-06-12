const Pet = require("../../models/pet");
const { matchedData } = require("express-validator");
const { isIDGood, handleError } = require("../../middleware/utils");

const getPets = async (req, res) => {
  try {
    req = matchedData(req);
    const id = await isIDGood(req.guardianId);

    Pet.find({ guardian: id }, (err, items) => {
      if (err) {
        return reject(buildErrObject(422, err.message));
      }
      res.status(200).json(items);
    });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { getPets };
