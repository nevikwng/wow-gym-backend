const express = require("express");

const {
  getArticleItems,
 
  getArticleItemById,
} = require("../controllers/article-controllers");

const router = express.Router();

router.get("/", getArticleItems);

router.get("/:articleId", getArticleItemById);

module.exports = router;
