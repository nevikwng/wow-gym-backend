const express = require("express");

const {
  getArticleItems,
  // getArticleCollection,
  getArticleItemById,
} = require("../controllers/article-controllers");

const router = express.Router();

router.get("/", getArticleItems);
// router.get("/:articles", getArticleCollection);
router.get("/articles/:articleId", getArticleItemById);

module.exports = router;