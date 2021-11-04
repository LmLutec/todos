const express = require("express");
const router = express.Router();
const Todo = require("../models/Todos");

// get todos
router.get("/todos", async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).send("server error");
  }
});

// create todo
router.post("/todos", async (req, res) => {
  console.log("in route");
  const { task, dueDate, category, complete } = req.body;
  console.log(req.body);
  try {
    const todo = new Todo({
      task,
      dueDate,
      category,
      complete,
    });
    console.log(todo);

    // add to DB
    await todo.save();
    res.status(200).json({ todo });
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
});

//edit complete status
router.put("/editcomplete/:id", async (req, res) => {
  try {
    const { complete } = req.body;
    const { id } = req.params;

    console.log(req.body);
    console.log(req.params);
    const todo = await Todo.findByIdAndUpdate(id, {
      complete,
    });

    res.status(200).json({ todo });
  } catch (err) {
    res.status(500).send("server error");
  }
});

// edit user
// router.put("/edituser/:id", async (req, res) => {
//   console.log("in route");
//   const {
//     fName,
//     lName,
//     role,
//     city,
//     state,
//     schoolDistrict,
//     email,
//     phoneNumber,
//     password,
//   } = req.body;
//   console.log(req.body);
//   try {
//     const user = new User({
//       fName,
//       lName,
//       role,
//       city,
//       state,
//       schoolDistrict,
//       email,
//       phoneNumber,
//       password,
//     });
//     console.log(user);

//     // add to DB
//     await user.save();
//     res.status(200).json({ user });
//   } catch (err) {
//     console.log(err);
//     res.status(500).send("server error");
//   }

module.exports = router;
