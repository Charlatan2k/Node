const express = require("express");
const cors = require("cors");
const userRouter = require("./routers/user.routers.js");
const errorHandling = require("./error/errorHandling.js");

const app = express();

app.set("port", process.env.PORT || 3000);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(userRouter);
app.use((req, res, next) => {
  res
    .status(404)
    .json({ error: true, codigo: 404, message: "Endpoint no existe" });
});

app.use(errorHandling);

module.exports = app;
