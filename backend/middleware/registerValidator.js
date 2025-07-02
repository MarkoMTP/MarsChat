const { body } = require("express-validator");

const registerValidator = [
  body("username")
    .isLength({ min: 6 })
    .withMessage("Username must be at least 6 characters long."),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long.")
    .matches(/\d/)
    .withMessage("Password must contain at least one number."),
  body("confirmPassword").custom((value, { req }) => {
    if (value !== req.body.password) {
      throw new Error("Passwords do not match");
    }
    return true;
  }),
];

module.exports = { registerValidator };
