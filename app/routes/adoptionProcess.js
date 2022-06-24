const express = require("express");
const router = express.Router();
require("../../config/passport");
const passport = require("passport");
const requireAuth = passport.authenticate("jwt", {
  session: false,
});
const trimRequest = require("trim-request");
const { roleAuthorization } = require("../controllers/auth");

const { getAdoptionProcesses } = require("../controllers/adoptionProcess");

const {
  validateGetAdoptionProcesses,
} = require("../controllers/adoptionProcess/validators");

/*
 * Get adoption processes
 */
router.get(
  "/:guardianId",
  requireAuth,
  roleAuthorization(["guardian"]),
  trimRequest.all,
  validateGetAdoptionProcesses,
  getAdoptionProcesses
);

module.exports = router;
