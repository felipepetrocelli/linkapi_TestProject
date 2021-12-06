require("dotenv").config();
const mongoose = require("mongoose");

const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;

async function connection() {
  try {
    await mongoose.connect(
      `mongodb+srv://${username}:${password}@cluster0.i8cmu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (err) {
    console.error(err);
  }
}

module.exports = connection;