let mongoose = require("mongoose");

let taskSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Task name is required"], trim: true },
  description: {
    type: String,
    required: [true, "Task description is required"],
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // ✅ Correct: Assigns the current timestamp correctly
  },
});

let Task = mongoose.model("Task", taskSchema);

module.exports = Task;
