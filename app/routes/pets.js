const express = require("express");
const router = express.Router();
require("../../config/passport");
const passport = require("passport");
const requireAuth = passport.authenticate("jwt", {
  session: false,
});
const trimRequest = require("trim-request");

const { roleAuthorization } = require("../controllers/auth");

const {
  validateCreatePet,
  validateDeletePet,
} = require("../controllers/pets/validators");
const { createPet, deletePet } = require("../controllers/pets");

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

/*
 * Delete pet
 */
router.delete(
  "/:id",
  requireAuth,
  roleAuthorization(["guardian"]),
  trimRequest.all,
  validateDeletePet,
  deletePet
);

module.exports = router;
