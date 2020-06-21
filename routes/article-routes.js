const express = require("express");

const {
  getArticleItems,
  getArticleCommentById,
  getArticleItemById,
} = require("../controllers/article-controllers");

const router = express.Router();

router.get("/", getArticleItems);
router.get("/:articleId", getArticleCommentById);
router.get("/:articleId", getArticleItemById);

module.exports = router;
