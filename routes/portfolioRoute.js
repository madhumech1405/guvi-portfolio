const express=require('express')
const { sendEmailController } = require("../controllers/portfolioContoller")


//routes objesct
const router=express.Router()

//routes
router.post('/sendEmail',sendEmailController)

module.exports=router