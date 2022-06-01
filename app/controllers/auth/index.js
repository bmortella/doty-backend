const { getRefreshToken } = require("./getRefreshToken");
const { login } = require("./login");
const { register } = require("./register");
const { roleAuthorization } = require("./roleAuthorization");

module.exports = {
  getRefreshToken,
  login,
  roleAuthorization,
  register,
};
