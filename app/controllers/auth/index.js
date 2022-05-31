const { getRefreshToken } = require("./getRefreshToken");
const { login } = require("./login");
const { roleAuthorization } = require("./roleAuthorization");

module.exports = {
  getRefreshToken,
  login,
  roleAuthorization,
};
