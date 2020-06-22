const db = require("../mySql-connect");
const HttpError = require("../models/http-error");

const getArticleItems = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM article");
  res.json(rows);
};
//123



const getArticleItemById = async (req, res) => {
  try {
    const articleId = req.params.articleId;
    // console.log(articleId);
    const [row] = await db.query(
      `SELECT * FROM article WHERE articleId=${articleId}`
    );
    if (!row) return next("Can't find article item", 404);
    res.json(row);
  } catch (err) {
    return next(new HttpError("Can't find article item", 404));
  }
};


const postArticleAdd = async (req, res) => {
  const output = {
    success: false,
  };
  console.log(req.body);
  const sql =
    "INSERT INTO `article_comments`(`articleId`, `memberId`, `memberName`, `content`, `memberImg`) VALUES (?,?,?,?,?) ";
  db.query(sql, [
    req.body.data.articleId,
    req.body.data.memberId,
    req.body.data.memberName,
    req.body.data.content,
    req.body.data.memberImg,
  ]).then(([r]) => {
    output.results = r;
    if (r.affectedRows && r.insertId) {
      output.success = true;
    }
    res.json(output);
  });
  //res.json(req.body);
  
};


module.exports = { getArticleItems, getArticleItemById, postArticleAdd };
