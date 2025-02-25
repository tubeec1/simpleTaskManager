let express = require("express");
let router = express.Router();

router.get("/", (req, res) => {
  res.send("this is user http://localhost:4000/user");
});

router.post("/", (req, res) => {
  let userName = req.body.user;
  res.send(userName);
});

module.exports = router;
