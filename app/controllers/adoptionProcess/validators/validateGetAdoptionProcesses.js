const { validateResult } = require("../../../middleware/utils");
const { check } = require("express-validator");

/**
 * Validates get pets request
 */
const validateGetAdoptionProcesses = [
  check("guardianId")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateGetAdoptionProcesses };
