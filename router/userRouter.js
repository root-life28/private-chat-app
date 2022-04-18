const express = require("express");

const router = express.Router();

// internal export
const { getUsers } = require("../controller/usersController");

//Users page

router.get("/", getUsers);

module.exports = router;
