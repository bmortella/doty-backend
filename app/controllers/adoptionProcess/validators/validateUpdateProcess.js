const { validateResult } = require("../../../middleware/utils");
const { check } = require("express-validator");

/**
 * Validates get pets request
 */
const validateUpdateProcess = [
  check("_id")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY"),
  check("process")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY"),
  check("stage")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY"),
  check("status")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateUpdateProcess };
