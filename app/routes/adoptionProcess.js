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
  getAdopterForm,
} = require("../controllers/adoptionProcess/getAdopterForm");
const { updateProcesses } = require("../controllers/adoptionProcess");

const {
  validateGetAdopterForm,
} = require("../controllers/adoptionProcess/validators");
const {
  validateGetAdoptionProcesses,
} = require("../controllers/adoptionProcess/validators");

const {
  validateUpdateProcesses,
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

router.get(
  "/process/:id",
  trimRequest.all,
  validateGetAdopterForm,
  getAdopterForm
);

router.post(
  "/process",
  trimRequest.all,
  validateUpdateProcesses,
  updateProcesses
);

module.exports = router;
