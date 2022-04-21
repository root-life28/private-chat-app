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

const { checkLogin } = require("../middlewares/common/checkLogin");
//Users page

router.get("/", setLocalVar("User"), checkLogin, getUsers);

// add user

router.post(
  "/",
  checkLogin,
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

router.delete("/:id", checkLogin, removeUser);
module.exports = router;
