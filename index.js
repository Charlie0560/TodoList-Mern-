const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoRoute = require("./routes/Todo");


app.use(express.json());



dotenv.config();

try {
  mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true }, () => {
    console.log("Connected to mongoDB");
  });
} catch (err) {
  console.log(err);
}

app.use("/api/todos", todoRoute);

app.listen(process.env.PORT || 5000, () => {
    console.log("Backend is running!");
  });
  