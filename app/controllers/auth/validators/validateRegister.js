const { validateResult } = require("../../../middleware/utils");
const { check } = require("express-validator");

/**
 * Validates register request
 */
const validateRegister = [
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
  check("password")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY")
    .isLength({
      min: 8,
    })
    .withMessage("PASSWORD_TOO_SHORT_MIN_8"),
  check("role")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY")
    .isIn(["guardian", "adopter"])
    .withMessage("ROLE_IS_NOT_VALID"),
  check("adoptionForm")
    .exists()
    .withMessage("MISSING")
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateRegister };
