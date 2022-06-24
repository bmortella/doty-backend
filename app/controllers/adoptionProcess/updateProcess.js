const { matchedData } = require("express-validator");
const AdoptionProcess = require("../../models/adoptionProcess");
const {
  isIDGood,
  handleError,
  buildErrObject,
} = require("../../middleware/utils");

const updateProcess = async (req, res) => {
  try {
    req = matchedData(req);
    const id = await isIDGood(req._id);

    AdoptionProcess.findByIdAndUpdate(
      id,
      { process: req.process, stage: req.stage, status: req.status },
      { returnDocument: "after" },
      (err, item) => {
        if (err) {
          return handleError(res, buildErrObject(422, err.message));
        }
        res.status(200).json(item);
      }
    );
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { updateProcess };
