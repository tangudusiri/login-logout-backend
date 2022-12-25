const express=require("express")
const router=express.Router()
const controller=require("../controllers/login")
router.post("/login",controller.login)
router.get("/",controller.allUsers)
router.post("/register",controller.register)
module.exports=router