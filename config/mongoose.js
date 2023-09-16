require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on(
  "error",
  console.error.bind(console, "error accured to connecting to db")
);

db.once("open", function () {
  console.log("Successfully connected to DataBase");
});
