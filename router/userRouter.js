const express = require("express");

const router = express.Router();

// internal export
const { getUsers } = require("../controller/usersController");
const setLocalVar = require("../middlewares/common/localVar");
//Users page

router.get("/", setLocalVar("User"), getUsers);

module.exports = router;
