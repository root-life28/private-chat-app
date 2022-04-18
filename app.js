// external import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");
const cookieParser = require("cookie-parser");

//internal import
const {
  notFoundHandler,
  errorHandler,
} = require("./middlewares/common/errorHandler");

const loginRouter = require("./router/loginRouter");
const userRouter = require("./router/userRouter");
const inboxRouter = require("./router/inboxRouter");
const app = express();
dotenv.config();

//db connection
mongoose
  .connect(process.env.MONGO_CONNECTION)
  .then(() => console.log("db connection success"))
  .catch((err) => console.log(err));

// request parsers

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//set view engine

app.set("view engine", "ejs");

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// parse cookies

app.use(cookieParser(process.env.COOKIE_SECRET));

//routing setup
app.use("/", loginRouter);
app.use("/users", userRouter);
app.use("/inbox", inboxRouter);

// 404 not found
app.use(notFoundHandler);
// default error handling
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log(`app listening to port ${process.env.PORT}`);
});
