import { useState } from "react";
function Featurs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div>
      <div>
        <h2 className="text-center font-bold mt-18 mb-10 text-4xl text-gray-700">
          Featurs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2  gap-10 md:max-w-150 md:mx-auto">
          <div className="shadow-lg px-4 py-2 hover:bg-blue-900 hover:text-white group">
            <h3 className="font-bold mb-2 text-sm text-center">
              🌟 Task Creation & Organization
            </h3>
            <p className="leading-6 text-gray-600 text-sm group-hover:text-white">
              Effortlessly create, edit, and delete tasks with a user-friendly
              interface. Keep everything structured and manage tasks
              efficiently.
            </p>
          </div>
          <div className="shadow-lg px-4 py-2 hover:bg-blue-900 hover:text-white group">
            <h3 className="font-bold mb-2 text-sm text-center">
              🌟 Task Creation & Organization
            </h3>
            <p className="leading-6 text-gray-600 text-sm group-hover:text-white">
              Effortlessly create, edit, and delete tasks with a user-friendly
              interface. Keep everything structured and manage tasks
              efficiently.
            </p>
          </div>
          <div className="shadow-lg px-4 py-2 hover:bg-blue-900 hover:text-white group">
            <h3 className="font-bold mb-2 text-sm text-center">
              🌟 Task Creation & Organization
            </h3>
            <p className="leading-6 text-gray-600 text-sm group-hover:text-white">
              Effortlessly create, edit, and delete tasks with a user-friendly
              interface. Keep everything structured and manage tasks
              efficiently.
            </p>
          </div>
          <div className="shadow-lg px-4 py-2 hover:bg-blue-900 hover:text-white group">
            <h3 className="font-bold mb-2 text-sm text-center">
              🌟 Task Creation & Organization
            </h3>
            <p className="leading-6 text-gray-600 text-sm group-hover:text-white">
              Effortlessly create, edit, and delete tasks with a user-friendly
              interface. Keep everything structured and manage tasks
              efficiently.
            </p>
          </div>
        </div>
      </div>
      <div className="my-20 bg-blue-900 text-white py-4 px-6 text-center">
        <h1 className="text-center font-bold text-2xl my-2">Benefits</h1>
        <p className="my-2 leading-6.5 text-white">
          With Simple Task Manager, you can streamline your tasks, improve
          productivity, and stay organized with ease. Our intuitive interface
          and powerful features make task management effortless, allowing you to
          focus on what really matters. Whether you're an individual, a team, or
          a small business, our system offers flexible solutions to help you
          stay on top of your work and meet deadlines more efficiently. Say
          goodbye to clutter and chaos, and embrace a simpler, more effective
          way to manage your tasks.
        </p>
      </div>
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Frequently Asked Questions (FAQ)
        </h2>

        <div className="space-y-4">
          {/* FAQ Item 1 */}
          <div className="border-b">
            <button
              className="w-full text-left p-4 font-semibold text-lg bg-gray-100 rounded-md focus:outline-none"
              onClick={() => toggleFAQ(0)}
            >
              What is Simple Task Manager?
            </button>
            {openIndex === 0 && (
              <div className="p-4 text-gray-700">
                Simple Task Manager is a web-based task management system
                designed to help individuals and teams organize and manage their
                tasks efficiently.
              </div>
            )}
          </div>

          {/* FAQ Item 2 */}
          <div className="border-b">
            <button
              className="w-full text-left p-4 font-semibold text-lg bg-gray-100 rounded-md focus:outline-none"
              onClick={() => toggleFAQ(1)}
            >
              How can I add a new task?
            </button>
            {openIndex === 1 && (
              <div className="p-4 text-gray-700">
                To add a new task, click on the "Add Task" button in the task
                management section and enter the task details.
              </div>
            )}
          </div>

          {/* FAQ Item 3 */}
          <div className="border-b">
            <button
              className="w-full text-left p-4 font-semibold text-lg bg-gray-100 rounded-md focus:outline-none"
              onClick={() => toggleFAQ(2)}
            >
              Can I edit or delete a task?
            </button>
            {openIndex === 2 && (
              <div className="p-4 text-gray-700">
                Yes, you can easily edit or delete any task by clicking the
                options button next to the task and selecting "Edit" or
                "Delete."
              </div>
            )}
          </div>

          {/* FAQ Item 4 */}
          <div className="border-b">
            <button
              className="w-full text-left p-4 font-semibold text-lg bg-gray-100 rounded-md focus:outline-none"
              onClick={() => toggleFAQ(3)}
            >
              Is Simple Task Manager free to use?
            </button>
            {openIndex === 3 && (
              <div className="p-4 text-gray-700">
                Simple Task Manager offers a free plan with basic features. We
                also have a premium plan with additional functionalities for
                teams and businesses.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featurs;
