const express = require("express");

const {
  getArticleItems,
  getArticleItemById,
  getComment,
  getArticleItemByMemberId,
  postArticleAddComments,
  postArticleAdd,
  getArticleItemByIdDel,
  getArticleItemByIdUpdate,
} = require("../controllers/article-controllers");

const router = express.Router();

router.get("/", getArticleItems);
router.get("/:articleId", getArticleItemById);
router.get("/api/:articleId", getComment);
router.get("/member/:memberId", getArticleItemByMemberId);

// router.post("/:articleId", postArticleAddComments);
// router.post("/", postArticleAdd);
router.post("/articlesUpdate", getArticleItemByIdUpdate);

router.delete("/articlesEdit/:articleId", getArticleItemByIdDel);

module.exports = router;
