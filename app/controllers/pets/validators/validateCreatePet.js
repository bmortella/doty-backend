const { validateResult } = require("../../../middleware/utils");
const { check } = require("express-validator");

/**
 * Validates pet creation request
 */
const validateCreatePet = [
  check("name")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY")
    .isLength({
      min: 2,
      max: 12,
    })
    .withMessage("NAME_TOO_SHORT"),
  check("sex")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY"),
  check("size")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY"),
  check("age")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateCreatePet };
