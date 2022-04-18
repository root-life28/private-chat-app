const express = require("express");

const router = express.Router();

// internal export
const { getInbox } = require("../controller/inboxController");
const setLocalVar = require("../middlewares/common/localVar");

//login page

router.get("/", setLocalVar("Inbox"), getInbox);

module.exports = router;
