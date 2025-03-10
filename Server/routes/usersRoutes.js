const express = require("express");
const { register, login, getProfile} = require("../controllers/usersController");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/profile", getProfile);

module.exports = router;
