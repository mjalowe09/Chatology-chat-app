const express = require("express");
const {
  registerUser,
  authUser,
  welcomeSign
} = require("../controllers/userControllers");

const router = express.Router();

router.route("/").post(registerUser);
router.post("/login", authUser);
router.post('/chats', welcomeSign)

module.exports = router;