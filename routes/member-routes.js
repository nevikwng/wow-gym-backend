const express = require("express");

const {
  getMember,
  getMemberId,
  InsertCheckOutPage,
  UpdateUser,
  selectMember,
} = require("../controllers/member-controllers");

const router = express.Router();

router.get("/", getMember);
router.get("/:userId", getMemberId);


router.post("/InsertUser", InsertCheckOutPage);
router.post("/UpdateUser", UpdateUser);
module.exports = router;
