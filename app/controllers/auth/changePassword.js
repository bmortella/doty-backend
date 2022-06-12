const {
  isIDGood,
  handleError,
  buildErrObject,
} = require("../../middleware/utils");
const { matchedData } = require("express-validator");
const { checkPassword } = require("../../middleware/auth");
const { findUser, changePasswordInDB } = require("./helpers");

const changePassword = async (req, res) => {
  try {
    const id = await isIDGood(req.user._id);
    const user = await findUser(req.user.email, req.user.role);
    req = matchedData(req);
    const isPasswordMatch = await checkPassword(req.currentPassword, user);
    if (!isPasswordMatch) {
      return handleError(res, buildErrObject(409, "WRONG_PASSWORD"));
    } else {
      res.status(200).json(await changePasswordInDB(id, req));
    }
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { changePassword };
