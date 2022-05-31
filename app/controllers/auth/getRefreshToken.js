const {
  getUserIdFromToken,
  findUserById,
  generateToken,
} = require("./helpers");
const { isIDGood, handleError } = require("../../middleware/utils");

/**
 * Refresh token function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getRefreshToken = async (req, res) => {
  try {
    const tokenEncrypted = req.headers.authorization
      .replace("Bearer ", "")
      .trim();
    let userId = await getUserIdFromToken(tokenEncrypted);
    userId = await isIDGood(userId);
    const user = await findUserById(userId);
    const token = {
      token: generateToken(user._id),
    };

    res.status(200).json(token);
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { getRefreshToken };
