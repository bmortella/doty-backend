const AdoptionProcess = require("../../models/adoptionProcess");
const { matchedData } = require("express-validator");
const { isIDGood, handleError } = require("../../middleware/utils");

const getAdoptionProcesses = async (req, res) => {
  try {
    req = matchedData(req);
    const id = await isIDGood(req.guardianId);

    AdoptionProcess.find({ guardianId: id })
      .populate("adopter")
      .populate("pet")
      .exec((err, items) => {
        if (err) {
          return handleError(res, buildErrObject(422, err.message));
        }
        res.status(200).json(items);
      });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { getAdoptionProcesses };
