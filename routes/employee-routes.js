const express = require("express");
const db = require("../mySql-connect");


const {
  getemployeelogin,
  getemployeecenter,
  getemployee,
  getemployeeID,
  getcourses,
  postcourses,
  getcoursesID,
} = require("../controllers/employee");

const router = express.Router();

//ok教練登入
router.get("/employeelogin", getemployeelogin);
router.get("/employeecenter", getemployeecenter)

//教練
router.get("/employee", getemployee);
router.get("/employee/:Eid", getemployeeID);

//課程
router.get("/courses", getcourses);
router.get("/courses/:courseId", getcoursesID)

//ok上傳課程
router.post('/courses', postcourses);

module.exports = router;