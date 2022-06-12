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
  updateProfile,
  changePassword,
} = require("../controllers/auth");

const {
  validateLogin,
  validateRegister,
  validateUpdateProfile,
  validateChangePassword,
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
  roleAuthorization(["guardian", "adopter"]),
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

/*
 * Edit profile route
 */
router.put(
  "/profile",
  requireAuth,
  trimRequest.all,
  validateUpdateProfile,
  updateProfile
);

/*
 * Change password route
 */
router.post(
  "/changePassword",
  requireAuth,
  trimRequest.all,
  validateChangePassword,
  changePassword
);

module.exports = router;
