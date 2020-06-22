const express = require("express");

const {
  getArticleItems,
  getArticleItemById,
  getComment,
  postArticleAddComments,
  postArticleAdd,
} = require("../controllers/article-controllers");

const router = express.Router();

router.get("/", getArticleItems);
router.get("/:articleId", getArticleItemById);
router.get("/api/:articleId", getComment);

router.post("/:articleId", postArticleAddComments);
router.post("/:articlesAdd", postArticleAdd);

module.exports = router;
