const express = require("express");

const {
  getCoursesCategory,
} = require("../controllers/course-controllers");

const router = express.Router();

router.get("/",getCoursesCategory,);

module.exports = router;
