const express = require("express");
const UserModel = require("../models/User");

const router = express.Router();

// Route to register a new user
router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const newUser = new UserModel({
      username,
      email,
      password,
      // Add more fields as needed
    });

    const savedUser = await newUser.save();

    res.json(savedUser);
  } catch (error) {
    console.error("Error registering user:", error);
    res.status(500).send("Internal Server Error");
  }
});

// Add more routes for login, update, delete, etc., as needed

module.exports = router;
