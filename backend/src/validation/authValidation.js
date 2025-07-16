const { body } = require("express-validator");

const registerValidation = [
  body("email")
    .isEmail()
    .withMessage("Invalid email format"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters"),
  body("name")
    .notEmpty()
    .withMessage("Name is required"),
];

const loginValidation = [
  body("email")
    .isEmail()
    .withMessage("Please provide a valid email"),
  body("password")
    .notEmpty()
    .withMessage("Password is required"),
];

module.exports = { registerValidation, loginValidation };
