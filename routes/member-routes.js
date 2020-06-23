const express = require("express");

const {
    getMember,
    getMemberID,
} = require("../controllers/member-controllers");

const router = express.Router();

router.get("/member", getMember);
router.get("/member/:memberId", getMemberID)
module.exports = router;
