const { validateLogin } = require("./validateLogin");
const { validateRegister } = require("./validateRegister");
const { validateUpdateProfile } = require("./validateUpdateProfile");
const { validateChangePassword } = require("./validateChangePassword");

module.exports = {
  validateLogin,
  validateRegister,
  validateUpdateProfile,
  validateChangePassword,
};
