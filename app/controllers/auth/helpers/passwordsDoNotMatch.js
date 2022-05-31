const { buildErrObject } = require("../../../middleware/utils");

/**
 * Adds one attempt to loginAttempts, then compares loginAttempts with the constant LOGIN_ATTEMPTS, if is less returns wrong password, else returns blockUser function
 * @param {Object} user - user object
 */
const passwordsDoNotMatch = async (user = {}) => {
  return new Promise(async (resolve, reject) => {
    try {
      return reject(buildErrObject(409, "WRONG_PASSWORD"));
    } catch (error) {
      throw error;
    }
  });
};

module.exports = { passwordsDoNotMatch };
