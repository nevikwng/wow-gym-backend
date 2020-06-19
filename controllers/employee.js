const db = require("../mySql-connect");
const HttpError = require("../models/http-error");

const getemployee = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM employee");
  res.json(rows);
};

const getemployeelogin = async (req, res) =>{
  const [rows] =await db.query("SELECT `Eaccount`,`Epwd`,`Eid` FROM `employee`");
  res.json(rows);
}

const getemployeecenter = async (req,res) =>{
  const [rows] = await db.query("SELECT `Ename`,`Egender`,`Ebirthday`,`EphoneNumber`,`Eemail` FROM `employee`");
  res.json(rows)
}

const getcourses = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM courses");
  res.json(rows);
};

const postcourses = async (req, res)=>{
  const output = {
      success: false
  }
  const sql = "INSERT INTO courses set ?";
  db.query(sql, [req.body])
      .then(([r])=>{
          output.results = r;
          if(r.affectedRows && r.insertId){
              output.success = true;
          }
          res.json(output);
      })
  //res.json(req.body);
}

const getemployeeID = async (req, res) => {
  try {
    const Eid = req.params.Eid;
    console.log(Eid);
    const [row] = await db.query(`SELECT * FROM employee WHERE Eid=${Eid}`);
    if (!row) return next("Can't find shop item", 404);
    res.json({ employeeItem: row });
  } catch (err) {
    return next(new HttpError("Can't find shop item", 404));
  }
};

const getcoursesID = async (req, res) => {
  try {
    const courseId = req.params.courseId;
    console.log(courseId);
    const [row] = await db.query(`SELECT * FROM courses WHERE courseId=${courseId}`);
    if (!row) return next("Can't find shop item", 404);
    res.json({ courseItem: row });
  } catch (err) {
    return next(new HttpError("Can't find shop item", 404));
  }
};



module.exports = { getemployeelogin,getemployeecenter,getemployee, getemployeeID, getcourses,postcourses, getcoursesID};