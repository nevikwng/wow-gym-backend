const express = require("express");

const {
  getMember,
  getMemberId,
  getMemberLogin,
  getMemberLoginId,
} = require("../controllers/member-controllers");

const router = express.Router();

router.get("/member", getMember);
router.get("/member/:memberId", getMemberId);
router.get("/memberLogin", getMemberLogin);
router.get("/memberLogin/:memberId", getMemberLoginId);
module.exports = router;
