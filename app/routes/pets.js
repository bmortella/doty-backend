const express = require("express");
const router = express.Router();
require("../../config/passport");
const passport = require("passport");
const requireAuth = passport.authenticate("jwt", {
  session: false,
});
const trimRequest = require("trim-request");

const { roleAuthorization } = require("../controllers/auth");

const { validateCreatePet } = require("../controllers/pets/validators");
const { createPet } = require("../controllers/pets");

/*
 * Create new pet
 */
router.post(
  "/",
  requireAuth,
  roleAuthorization(["guardian"]),
  trimRequest.all,
  validateCreatePet,
  createPet
);

module.exports = router;
