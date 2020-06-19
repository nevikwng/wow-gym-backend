const express = require("express");

const {
  getCourses,
  getCoursesID,
} = require("../controllers/course-controllers");

const router = express.Router();

router.get("/", getCourses);
router.get("/courses/:courseId", getCoursesID)
module.exports = router;
