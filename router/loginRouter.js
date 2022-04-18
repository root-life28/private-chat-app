const express = require("express");

const router = express.Router();

// internal export
const { getLogin } = require("../controller/loginController");
const setLocalVar = require("../middlewares/common/localVar");
//login page

router.get("/", setLocalVar("Login"), getLogin);

module.exports = router;
