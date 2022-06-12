const { getRefreshToken } = require("./getRefreshToken");
const { login } = require("./login");
const { register } = require("./register");
const { roleAuthorization } = require("./roleAuthorization");
const { updateProfile } = require("./updateProfile");
const { changePassword } = require("./changePassword");

module.exports = {
  getRefreshToken,
  login,
  roleAuthorization,
  register,
  updateProfile,
  changePassword,
};
