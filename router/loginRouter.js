const express = require("express");

const router = express.Router();

// internal export
const { getLogin, login, logout } = require("../controller/loginController");
const setLocalVar = require("../middlewares/common/localVar");
const {
  doLoginValidators,
  doLoginValidationHandler,
} = require("../middlewares/login/loginValidator");

const { redirectLoggedIn } = require("../middlewares/common/checkLogin");
//login page

router.get("/", setLocalVar("Login"), redirectLoggedIn, getLogin);

router.post(
  "/",
  setLocalVar("Login"),
  doLoginValidators,
  doLoginValidationHandler,
  login
);

router.delete("/", logout);

module.exports = router;
