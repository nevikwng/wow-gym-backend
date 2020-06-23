const db = require("../mySql-connect");
const HttpError = require("../models/http-error");
const moment = require('moment-timezone');
const router = require("../routes/courses-routes");


const getCourses = async (req, res) => {
  const newRow = {}

    const [rows] = await db.query("SELECT * FROM courses INNER JOIN coursescategory ON courses.courseCategoryId = coursescategory.courseCategoryId ORDER BY courseTime");
    // console.log(rows)
    if (rows) newRow.coursesRow = rows
    // console.log(newRow.coursesRow)
    for (i of rows) {
      const fm = 'ddd MM DD HH:mm'
      i.courseTime = moment(i.courseTime).format(fm)
      // console.log(i.courseTime)
    }
    res.json(newRow)
  }


const getCoursesCategory = async (req, res) => {
  try {
    const collectionId = req.params.collection;
    const [rows] = await db.query("SELECT * FROM coursescategory");
    if (!rows) return next("Can't find shop item", 404);
    res.json({ coursesCategory: rows });
  } catch (err) {
    return next(new HttpError("Can't find shop item of collection", 404));
  }
};


const getCoursesID = async (req, res) => {
    try {
      const courseId = req.params.courseId;
      console.log(courseId);
      const [row] = await db.query(`SELECT * FROM courses WHERE courseId=${courseId}`);
      if (!row) return next("Can't find course item", 404);
      res.json({ courseItem: row });
    } catch (err) {
      return next(new HttpError("Can't find course item", 404));
    }
  };
  

module.exports = { getCourses, getCoursesCategory, getCoursesID};
