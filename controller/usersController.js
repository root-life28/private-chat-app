//external import
const bcrypt = require("bcrypt");

// internal import
const User = require("../models/People");

function getUsers(req, res) {
  res.render("users");
}
async function addUser(req, res, next) {
  let newUser;
  const hashPassword = await bcrypt.hash(req.body.password, 10);
  if (req.files && req.files.length > 0) {
    newUser = new User({
      ...req.body,
      avatar: req.files[0].filename,
      password: hashPassword,
    });
  } else {
    newUser = new User({
      ...req.body,
      password: hashPassword,
    });
  }

  try {
    const result = await newUser.save();
    res.status(200).json({
      message: "User was added successfully!",
    });
  } catch (error) {
    res.status(500).json({
      error: {
        common: {
          msg: "Unknown error occurred!",
        },
      },
    });
  }
}

module.exports = {
  getUsers,
  addUser,
};
