const db = require("../mySql-connect");
const HttpError = require("../models/http-error");

const getArticleItems = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM article ");
  res.json(rows);
};
//123

const getArticleItemById = async (req, res) => {
  try {
    const articleId = req.params.articleId;
    // console.log(articleId);
    const [row] = await db.query(
      `SELECT * FROM article   WHERE article.articleId=${articleId}`
    );
    if (!row) return next("Can't find article item", 404);
    res.json(row);
  } catch (err) {
    return next(new HttpError("Can't find article item", 404));
  }
};

const getComment = async (req, res) => {
  try {
    const articleId = req.params.articleId;
    // console.log(articleId);
    const [row] = await db.query(
      `SELECT * FROM  article INNER JOIN article_comments ON article_comments.articleId = article.articleId WHERE article.articleId=${articleId}`
    );
    if (!row) return next("Can't find article item", 404);
    res.json(row);
  } catch (err) {
    return next(new HttpError("Can't find article item", 404));
  }
};

const postArticleAddComments = async (req, res) => {
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

const postArticleAdd = async (req, res) => {
  const output = {
    success: false,
  };
  console.log(req.body);
  const sql =
    "INSERT INTO `article`(`memberId`, `memberName`, `articleTitle`, `categoryName`,`articleContent`,`tagName1`,`tagName2`, `articleImages`,`memberImg`) VALUES (?,?,?,?,?,?,?,?,?) ";
  db.query(sql, [
    req.body.data.memberId,
    req.body.data.memberName,
    req.body.data.articleTitle,
    req.body.data.categoryName,
    req.body.data.articleContent,
    req.body.data.tagName1,
    req.body.data.tagName2,
    req.body.data.articleImages,
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

module.exports = {
  getArticleItems,
  getArticleItemById,
  getComment,
  postArticleAddComments,
  postArticleAdd,
};
