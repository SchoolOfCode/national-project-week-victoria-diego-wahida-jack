import express from "express";
import path from "path";

import __dirname from "./dirname.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import logger from "morgan";

import usersRouter from "./routes/users.js";

const app = express();

app.use(logger("dev"));
app.use(
  cors({
    origin: "https://stupefied-mcnulty-7a24c5.netlify.app/",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "./front-end/src/build")));

app.use("/users", usersRouter);

app.use(function (req, res, next) {
  res
    .status(404)
    .json({ message: "We couldn't find what you were looking for 😞" });
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).json(err);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "./front-end/public/index.html"));
});

export default app;
