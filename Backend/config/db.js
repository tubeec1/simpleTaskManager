let mongoose = require("mongoose");
let dotenv = require("dotenv").config();

let database = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to database successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = database;
