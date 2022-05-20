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

if ((process.env.NODE_ENV = "production")) {
  app.use(express.static("frontend/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend is running!");
});
