const express = require("express");
const router = express.Router();



const {


    getapi


} = require("../controllers/user-controllers");





router.get('/userList', getapi)






module.exports = router;
