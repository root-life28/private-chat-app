function getLogin(req, res) {
  res.render("index", {
    title: "Login- Private Chat Application",
  });
}

module.exports = {
  getLogin,
};
