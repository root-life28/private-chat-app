function getUsers(req, res) {
  res.render("users", {
    title: "Users- Private Chat Application",
  });
}

module.exports = {
  getUsers,
};
