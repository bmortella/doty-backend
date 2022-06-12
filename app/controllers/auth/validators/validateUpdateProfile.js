const { validateResult } = require("../../../middleware/utils");
const { check } = require("express-validator");

/**
 * Validates update profile request
 */
const validateUpdateProfile = [
  check("name")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY")
    .isLength({
      min: 2,
      max: 32,
    })
    .withMessage("NAME_TOO_SHORT"),
  check("email")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY")
    .isEmail()
    .withMessage("EMAIL_IS_NOT_VALID"),
  check("phone")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY")
    .isMobilePhone()
    .withMessage("PHONE_IS_NOT_VALID"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateUpdateProfile };
