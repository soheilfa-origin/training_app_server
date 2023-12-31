const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const userRoutes = require("./routes/user.js");
const cors = require("cors"); // Import cors

const app = express();
const port = 3001;

app.use(bodyParser.json());

// Use cors middleware
const corsOptions = {
  origin: "http://localhost:5173", // Replace with the actual origin of your React app
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionsSuccessStatus: 204,
};
app.use(cors(corsOptions));

// MongoDB connection URI
const uri =
  "mongodb+srv://soheilfarrokh:VTqczq9bxt4rTRkr@cluster0.op8j8fu.mongodb.net/";

// Connect to MongoDB using Mongoose
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((res) => console.log("mongoose is connected"));

// Use the routes
app.use("/api/user", userRoutes);

// Use the routes end

app.get("/", (req, res) => {
  res.send("Hello, this is your Node.js server!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
