Simple Task Manager
🚀 A simple CRUD-based task management application with a Node.js & React stack.

**Features**
✅ CRUD Operations – Create, Read, Update, Delete tasks
🔄 RESTful API – Backend using Node.js + Express.js
💾 Database – Uses MongoDB with Mongoose ODM
🎨 Frontend – Built with React & Vite
🔗 API Integration – Uses fetch API

**Tech Stack**
Frontend: React, Vite, fetch
Backend: Node.js, Express.js, Mongoose
Database: MongoDB
Other: React Router, Tailwind CSS (if applicable)

**Installation & Setup**
1️⃣ Clone the Repository
git clone https://github.com/tubeec1/simpleTaskManager.git
cd simpleTaskManager

2️⃣ Backend Setup
cd Backend
npm install
Create a .env file in the Backend directory and add:

**env**
MONGO_URI=your_mongodb_connection_string
PORT=5000

Then, start the backend server:
nodemon server.js
Ensure MongoDB is running locally or use MongoDB Atlas.

3️⃣ Frontend Setup
cd TaskFrontEnd
npm install
npm run dev
Open http://localhost:5173 in your browser.

API Endpoints
Method	Endpoint	Description
GET	/tasks	Get all tasks
POST	/tasks	Create a new task
PUT	/tasks/:id	Update a task
DELETE	/tasks/:id	Delete a task
Usage

Open the frontend at http://localhost:5173.
Manage tasks with add, edit, and delete functionality.
Data is stored in MongoDB for persistence.

**Contributing**
Pull requests are welcome! Feel free to fork and submit improvements.
