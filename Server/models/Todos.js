const mongoose = require("mongoose");
const { ObjectId } = mongoose;

const TodosSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
  },
  category: {
    type: String,
    required: true,
  },
});

module.exports = Todo = mongoose.model("Todo", TodosSchema);
