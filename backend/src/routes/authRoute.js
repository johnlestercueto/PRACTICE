
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

const validateRequest = require("../middlewares/validateRequest");
const { registerValidation, loginValidation } = require("../validation/authValidation");

router.post("/register", registerValidation, validateRequest, authController.registerUser);
router.get("/login", loginValidation, validateRequest, authController.loginUser);

module.exports = router;
