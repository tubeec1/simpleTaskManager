let express = require("express");
let router = express.Router();
let taskController = require("../controllers/taskControllers");

router.get("/", taskController.getAllTasks);
router.get("/:identifier", taskController.getTaskByNameOrId);
router.post("/", taskController.createTask);
router.put("/:id", taskController.updateTaskById);
router.delete("/:id", taskController.deleteTaskById);
module.exports = router;
