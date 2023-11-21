const cors = require("cors");
const express = require("express");
const errorHandling = require("./error/errorHandling");
const userRouters = require("./routers/user.routers");

const app = express();

app.set("port", process.env.PORT || 3500);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(userRouters);

app.use((req, res, next) => {
  res.status(404).json({ message: "Endpoint not found" });
});

app.use(errorHandling);

module.exports = app;
