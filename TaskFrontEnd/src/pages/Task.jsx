import { useEffect, useState } from "react";

function Task() {
  let [taskName, setTaskName] = useState("");
  let [taskDescription, setTaskDescription] = useState("");
  let [tasksData, setTasksData] = useState([]);
  let [taskDataIdToUpdate, setTaskDataIdToUpdate] = useState(null);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let response = await fetch("http://localhost:4000/task");
        let data = await response.json();
        setTasksData(data);
      } catch (er) {
        console.log(er);
      }
    };

    fetchData();
  }, []);

  let fetchData = async () => {
    try {
      let res = await fetch("http://localhost:4000/task");
      let data = await res.json();
      setTasksData(data);
    } catch (er) {
      console.log(er);
    }
  };

  let saveTask = async () => {
    if (taskName === "" || taskDescription === "") {
      alert("enter all fields");
    } else {
      let data = { name: taskName, description: taskDescription };
      try {
        let res = await fetch("http://localhost:4000/task", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        let resData = await res.json();
        alert(resData.message);

        fetchData();
        setTaskName("");
        setTaskDescription("");
      } catch (er) {
        console.log(er);
      }
    }
  };

  let dataToInputs = (task) => {
    setTaskName("");
    setTaskDescription("");
    setTaskName(task.name);
    setTaskDescription(task.description);
    setTaskDataIdToUpdate(task._id);
  };
  let updateTask = async () => {
    let data = { name: taskName, description: taskDescription };
    try {
      let res = await fetch(
        `http://localhost:4000/task/${taskDataIdToUpdate}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      let resData = await res.json();
      alert(resData.message);
      fetchData();
      setTaskName("");
      setTaskDescription("");
      setTaskDataIdToUpdate(null);
    } catch (er) {
      console.log(er);
    }
  };

  let deleteTask = async (id) => {
    try {
      let response = await fetch(`http://localhost:4000/task/${id}`, {
        method: "DELETE",
      });
      let data = await response.json();
      alert(data.message);
      getAllTasks();
    } catch (er) {
      console.log(er);
    }

    let fetchData = async () => {
      try {
        let res = await fetch("http://localhost:4000/task");
        let data = await res.json();
        setTasksData(data);
      } catch (er) {
        console.log(er);
      }
    };
    fetchData();
  };

  return (
    <div className="md:max-w-180 h-full flex flex-col md:mx-auto mt-10 text-center shadow py-4">
      <h1 className="text-4xl py-2 font-bold text-gray-500">
        Task Manager App
      </h1>
      <div className="flex md:flex-row flex-col p-5 justify-center gap-5 my-5 items-center">
        <input
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          value={taskName}
          type="text"
          placeholder="Enter task name"
          className="border border-gray-300 py-0.5 px-2 w-60"
        />
        <input
          value={taskDescription}
          onChange={(e) => {
            setTaskDescription(e.target.value);
          }}
          type="text"
          placeholder="Enter task description"
          className="border border-gray-300 py-0.5 px-2 w-60"
        />
        <div className="flex gap-2">
          <button
            className="bg-green-800 py-0.5 px-4 text-white hover:bg-white hover:text-green-800"
            onClick={saveTask}
            disabled={taskDataIdToUpdate !== null}
          >
            Save
          </button>
          <button
            className="bg-green-800 py-0.5 px-4 text-white hover:bg-white hover:text-green-800"
            onClick={updateTask}
            disabled={taskDataIdToUpdate === null}
          >
            Update
          </button>
        </div>
      </div>
      <div className="my-3 px-2 ">
        <h2 className="text-3xl font-semibold mb-10">List OF Tasks</h2>
        <table className="md:w-full text-gray-600">
          <thead>
            <tr className="border">
              <th className="border">Name</th>
              <th className="border">Description</th>
              <th className="border">Date</th>
              <th className="border">Update</th>
              <th className="border">Delete</th>
            </tr>
          </thead>
          <tbody>
            {tasksData.map((task, index) => {
              return (
                <tr className="border" key={task._id}>
                  <td className="border">{task.name}</td>
                  <td className="border">{task.description}</td>
                  <td className="border">
                    {new Date(task.createdAt).toDateString()}
                  </td>
                  <td
                    className="border"
                    onClick={() => {
                      dataToInputs(task);
                    }}
                  >
                    <i className="fa-solid fa-pen-to-square text-green-500"></i>
                  </td>
                  <td
                    className="border"
                    onClick={() => {
                      deleteTask(task._id);
                    }}
                  >
                    <i className="fa-solid fa-trash text-red-500"></i>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Task;
