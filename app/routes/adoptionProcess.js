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

const {
  updateProcess,
} = require("../controllers/adoptionProcess/updateProcess");

const {
  validateGetAdoptionProcesses,
  validateGetAdopterForm,
  validateUpdateProcess,
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

router.put(
  "/",
  requireAuth,
  trimRequest.all,
  validateUpdateProcess,
  updateProcess
);

module.exports = router;
