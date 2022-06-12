const { validateResult } = require("../../../middleware/utils");
const { check } = require("express-validator");

/**
 * Validates change password request
 */
const validateChangePassword = [
  check("currentPassword")
    .optional()
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY")
    .isLength({
      min: 8,
    })
    .withMessage("PASSWORD_TOO_SHORT"),
  check("newPassword")
    .optional()
    .not()
    .isEmpty()
    .withMessage("IS_EMPTY")
    .isLength({
      min: 8,
    })
    .withMessage("PASSWORD_TOO_SHORT"),
  (req, res, next) => {
    validateResult(req, res, next);
  },
];

module.exports = { validateChangePassword };
