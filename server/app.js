const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./routes/auth");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use("/api/auth", authRoutes);

module.exports = app;
