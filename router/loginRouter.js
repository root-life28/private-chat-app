const express = require("express");

const router = express.Router();

// internal export
const { getLogin } = require("../controller/loginController");

//login page

router.get("/", getLogin);

module.exports = router;
