const User = require("../../models/user");
const { buildErrObject } = require("../../middleware/utils");

const userExists = (email, role) => {
  return new Promise((resolve, reject) => {
    User.findOne({ email, role }, (err, item) => {
      if (err) {
        return reject(buildErrObject(422, err.message));
      }

      if (item) {
        return reject(buildErrObject(422, "USER_ALREADY_EXISTS"));
      }

      resolve(false);
    });
  });
};

module.exports = { userExists };
