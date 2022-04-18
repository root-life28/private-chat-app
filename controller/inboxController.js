function getInbox(req, res) {
  res.render("inbox", {
    title: "Inbox- Private Chat Application",
  });
}

module.exports = {
  getInbox,
};
