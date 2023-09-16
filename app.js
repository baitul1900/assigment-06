const express = require("express");
const app = express();
const Router = require("./src/routes/api");

app.use("/api", Router);






module.exports = app;
