
const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");
const auth = require('../middlewares/auth')

const validateRequest = require("../middlewares/validateRequest");
const { registerValidation, loginValidation } = require("../validation/authValidation");

router.post("/register", registerValidation, validateRequest, authController.registerUser);
router.post("/login", loginValidation, validateRequest, authController.loginUser);
router.get('/profile', auth, (req, res) => {
  res.json({ message: 'Welcome to your profile', user: req.user });
});

module.exports = router;
