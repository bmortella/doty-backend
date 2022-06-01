const { matchedData } = require("express-validator");
const { setUserInfo } = require("./helpers/setUserInfo");
const { generateToken } = require("./helpers/generateToken");

const { findUser, passwordsDoNotMatch } = require("./helpers");

const { handleError } = require("../../middleware/utils");
const { checkPassword } = require("../../middleware/auth");

/**
 * Login function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const login = async (req, res) => {
  try {
    const data = matchedData(req);
    const user = await findUser(data.email);
    const isPasswordMatch = await checkPassword(data.password, user);
    if (!isPasswordMatch) {
      handleError(res, await passwordsDoNotMatch(user));
    } else {
      // all ok, return token
      const userInfo = await setUserInfo(user);

      res.status(200).json({
        token: generateToken(user._id),
        user: userInfo,
      });
    }
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { login };
