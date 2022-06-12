const { matchedData } = require("express-validator");

const { handleError } = require("../../middleware/utils");
const { userExists } = require("../../middleware/auth/userExists");
const { updateUser } = require("./helpers");

const updateProfile = async (req, res) => {
  try {
    const user = req.user;
    req = matchedData(req);

    if (user.email !== req.email) {
      await userExists(req.email, user.role);
    }

    res.status(200).json({ user: await updateUser(req, user._id) });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { updateProfile };
