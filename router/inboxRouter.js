const express = require("express");

const router = express.Router();

// internal export
const { getInbox } = require("../controller/inboxController");
const setLocalVar = require("../middlewares/common/localVar");
const { checkLogin } = require("../middlewares/common/checkLogin");

//login page

router.get("/", setLocalVar("Inbox"), checkLogin, getInbox);

module.exports = router;
