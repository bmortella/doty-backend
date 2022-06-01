const express = require("express");
const router = express.Router();
require("../../config/passport");
const passport = require("passport");
const requireAuth = passport.authenticate("jwt", {
  session: false,
});
const trimRequest = require("trim-request");

const {
  getRefreshToken,
  login,
  register,
  roleAuthorization,
} = require("../controllers/auth");

const {
  validateLogin,
  validateRegister,
} = require("../controllers/auth/validators");

/*
 * Auth routes
 */

/*
 * Get new refresh token
 */
router.get(
  "/token",
  requireAuth,
  roleAuthorization(["user", "admin"]),
  trimRequest.all,
  getRefreshToken
);

/*
 * Signup route
 */
router.post("/signup", trimRequest.all, validateRegister, register);

/*
 * Login route
 */
router.post("/login", trimRequest.all, validateLogin, login);

module.exports = router;
