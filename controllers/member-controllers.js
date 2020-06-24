const db = require("../mySql-connect");
const HttpError = require("../models/http-error");
const moment = require('moment-timezone');


const getMember = async (req, res) => {
    const newRow = {}
    const [rows] = await db.query("SELECT * FROM member");
    if (rows) newRow.membersRow = rows
    // console.log(newRow.coursesRow)
    for (i of rows) {

        const fm = 'ddd MM DD HH:mm'
        i.courseTime = moment(i.courseTime).format(fm)
        // console.log(i.courseTime)
    }
    res.json(newRow)
};

// const getMemberID = async (req, res) => {
//     try {
//         const newRow = {}
//         const memberId = req.params.memberId;
//         console.log(memberID);
//         const [row] = await db.query(`SELECT * FROM member WHERE memberId=${memberId}`);
//         if (row) newRow.membersRow = row
//         // console.log(newRow.coursesRow)
//         for (i of row) {

//             const fm = 'ddd MM DD HH:mm'
//             i.courseTime = moment(i.courseTime).format(fm)
//             // console.log(i.courseTime)
//         }
        
//         res.json(newRow);

//     } catch (err) {
//         return next(new HttpError("Can't find shop item", 404));
//         console.log(err)
//     }
// };

const getMemberId = async (req, res) => {
    try {userId 
      const newRow = {}
      const memberId = req.params.memberId;
    //   console.log(memberId);
      const [rows] = await db.query(`SELECT * FROM member WHERE memberId=${memberId}`);
      if (rows) newRow.membersRow = rows
      // console.log(row)
      for (i of rows) {
  
        const fm = 'ddd MM DD HH:mm'
        i.courseTime = moment(i.courseTime).format(fm)
        if (!rows) return next("Can't find shop item", 404);
        res.json({ memberItem: newRow });
      }
    } catch (err) {
      return next(new HttpError("Can't find shop item", 404));
    }
  };
  
  const getMemberLogin = async (req, res) => {
    
    const newRow = {}
    const [rows] = await db.query("SELECT `memberAccount`,`memberPwd`,`memberName`,`memberId`, `memberEmail`, `courseId`, `courseName`, `courseCategory`, `staffId`, `courseTime`, `courseHour` FROM `member`");
    if (rows) newRow.memberRow = rows
    // console.log(newRow.coursesRow)
    for (i of rows) {

        const fm = 'ddd MM DD HH:mm'
        i.courseTime = moment(i.courseTime).format(fm)
        // console.log(i.courseTime)
    }
    res.json(newRow);
  }

  const getMemberLoginId = async (req, res) => {
    
    const newRow = {}
    const [rows] = await db.query(`SELECT * FROM member WHERE memberId=${memberId}`);
    if (rows) newRow.memberRow = rows
    // console.log(newRow.coursesRow)
    for (i of rows) {

        const fm = 'ddd MM DD HH:mm'
        i.courseTime = moment(i.courseTime).format(fm)
        // console.log(i.courseTime)
    }
    res.json({ memberRow: newRow });
  }


module.exports = { getMember, getMemberId, getMemberLogin, getMemberLoginId };