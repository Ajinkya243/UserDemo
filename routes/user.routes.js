const express=require('express');
const router=express.Router();
const{addUser,getUser}=require("../controllers/user.controller");

router.post("/",addUser);
router.get("/:id",getUser);

module.exports=router