const express = require("express");

const {
  getMember,
  getMemberId,
  InsertCheckOutPage,
} = require("../controllers/member-controllers");

const router = express.Router();

router.get("/", getMember);
router.get("/:userId", getMemberId);
router.post("/InsertUser", InsertCheckOutPage);

module.exports = router;
