let express = require("express");
let dotenv = require("dotenv");
let user = require("./routes/user");
let dbCon = require("./config/db");
let task = require("./routes/task");
let cors = require("cors");

dotenv.config();
let app = express();

app.use(express.json());
app.use(cors());
dbCon();

app.use("/user", user);
app.use("/task", task);

console.log(process.env.PORT);

app.listen(process.env.PORT, function () {
  console.log("http://localhost:4000");
});
