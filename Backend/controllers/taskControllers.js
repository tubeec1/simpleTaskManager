let Task = require("../models/task");

let getAllTasks = async (req, res) => {
  try {
    let tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (e) {
    res.status(500).json({ message: e });
  }
};

let createTask = async (req, res) => {
  let { name, description } = req.body;
  try {
    let newTask = new Task({ name, description });
    await newTask.save();
    res.json({ message: "successfully registerd task", newTask: newTask });
  } catch (e) {
    res.json({ message: e });
  }
};

let updateTaskById = async (req, res) => {
  let id = req.params.id;
  let data = req.body;
  try {
    let updateTask = await Task.findByIdAndUpdate(id, data, { new: true });
    res.json({ message: "successfully update", taskupdate: updateTask });
  } catch (er) {
    res.json({ message: er });
  }
};

let deleteTaskById = async (req, res) => {
  let id = req.params.id;
  try {
    let deletedTask = await Task.findByIdAndDelete(id);
    if (!deletedTask) {
      return res
        .status(404)
        .json({ message: "there is no deleted task by this id" });
    }
    res
      .status(200)
      .json({ message: "successflly deleted", deletedTask: deletedTask });
  } catch (er) {
    res.status(500).json({ message: er.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
  updateTaskById,
  deleteTaskById,
};
