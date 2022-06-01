const User = require("../../../models/user");
const { itemNotFound } = require("../../../middleware/utils");

/**
 * Finds user by email
 * @param {string} email - user´s email
 */
const findUser = (email, role) => {
  return new Promise((resolve, reject) => {
    User.findOne(
      {
        email,
        role,
      },
      "password name email role phone",
      async (err, item) => {
        try {
          await itemNotFound(err, item, "USER_DOES_NOT_EXIST");
          resolve(item);
        } catch (error) {
          reject(error);
        }
      }
    );
  });
};

module.exports = { findUser };
