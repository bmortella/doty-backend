const { getRefreshToken } = require("./getRefreshToken");
const { login } = require("./login");
const { register } = require("./register");
const { roleAuthorization } = require("./roleAuthorization");
const { updateProfile } = require("./updateProfile");

module.exports = {
  getRefreshToken,
  login,
  roleAuthorization,
  register,
  updateProfile,
};
