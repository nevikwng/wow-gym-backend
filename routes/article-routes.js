const express = require("express");

const {
  getArticleItems,
  getArticleItemById,
  postArticleAdd,
} = require("../controllers/article-controllers");

const router = express.Router();

router.get("/", getArticleItems);
router.get("/:articleId", getArticleItemById);
router.post("/:articleId", postArticleAdd);


module.exports = router;
