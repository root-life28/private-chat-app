const express = require("express");

const router = express.Router();

// internal export
const { getUsers } = require("../controller/usersController");
const setLocalVar = require("../middlewares/common/localVar");
const avatarUpload = require("../middlewares/users/avatarUpload");
const { addUser, removeUser } = require("../controller/usersController");
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

router.delete("/:id", removeUser);
module.exports = router;
