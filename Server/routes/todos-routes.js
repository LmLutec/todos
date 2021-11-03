const express = require("express");
const router = express.Router();
const User = require("../models/Todos");

// get tasks
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send("server error");
  }
});

// create user
router.post("/users", async (req, res) => {
  console.log("in route");
  const {
    fName,
    lName,
    role,
    city,
    state,
    schoolDistrict,
    email,
    phoneNumber,
    password,
  } = req.body;
  console.log(req.body);
  try {
    const user = new User({
      fName,
      lName,
      role,
      city,
      state,
      schoolDistrict,
      email,
      phoneNumber,
      password,
    });
    console.log(user);

    // add to DB
    await user.save();
    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

// edit user
router.put("/edituser/:id", async (req, res) => {
  console.log("in route");
  const {
    fName,
    lName,
    role,
    city,
    state,
    schoolDistrict,
    email,
    phoneNumber,
    password,
  } = req.body;
  console.log(req.body);
  try {
    const user = new User({
      fName,
      lName,
      role,
      city,
      state,
      schoolDistrict,
      email,
      phoneNumber,
      password,
    });
    console.log(user);

    // add to DB
    await user.save();
    res.status(200).json({ user });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

module.exports = router;