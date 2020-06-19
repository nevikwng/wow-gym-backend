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

const getMemberID = async (req, res) => {
    try {
      const newRow = {}
      const memberId = req.params.memberId;
    //   console.log(memberId);
      const [row] = await db.query(`SELECT * FROM member WHERE memberId=${memberId}`);
      if (row) newRow.membersRow = row
      // console.log(row)
      for (i of row) {
  
        const fm = 'ddd MM DD HH:mm'
        i.courseTime = moment(i.courseTime).format(fm)
        if (!row) return next("Can't find shop item", 404);
        res.json({ memberItem: newRow });
      }
    } catch (err) {
      return next(new HttpError("Can't find shop item", 404));
    }
  };
  



module.exports = { getMember, getMemberID };