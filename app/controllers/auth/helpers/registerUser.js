const User = require("../../../models/user");
const { buildErrObject } = require("../../../middleware/utils");

/**
 * Registers a new user in database
 * @param {Object} req - request object
 */
const registerUser = (req = {}) => {
  return new Promise((resolve, reject) => {
    const user = new User({
      name: req.name,
      email: req.email,
      password: req.password,
      phone: req.phone,
      role: req.role,
    });
    user.save((err, item) => {
      if (err) {
        reject(buildErrObject(422, err.message));
      }
      resolve(item);
    });
  });
};

module.exports = { registerUser };
