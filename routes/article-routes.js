const express = require("express");

const {
  getArticleItems,
  getArticleItemById,
  postArticleAddComments,
  getComment,
  postArticleAdd,
} = require("../controllers/article-controllers");

const router = express.Router();

router.get("/", getArticleItems);
router.get("/:articleId", getArticleItemById);
router.get("/api/:articleId", getComment);

router.post("/:articleId", postArticleAddComments);
router.post("/:articleAdd", postArticleAdd);

module.exports = router;
