require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const app = express();

connectDB();

const port = process.env.PORT;

app.use("/", (req, res) => {
  return res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening to server on port http://localhost:${port}`);
});
