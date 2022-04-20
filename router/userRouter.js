const express = require("express");

const router = express.Router();

// internal export
const { getUsers } = require("../controller/usersController");
const setLocalVar = require("../middlewares/common/localVar");
const avatarUpload = require("../middlewares/users/avatarUpload");
const { addUser } = require("../controller/usersController");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidator");

//Users page

router.get("/", setLocalVar("User"), getUsers);

// add user

router.post(
  "/",
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

module.exports = router;
