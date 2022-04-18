const express = require("express");

const router = express.Router();

// internal export
const { getInbox } = require("../controller/inboxController");

//login page

router.get("/", getInbox);

module.exports = router;
