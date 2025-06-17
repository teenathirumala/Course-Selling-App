const jwt=require("jsonwebtoken")
const express=require("express")
const mongoose=require("mongoose")
const app=express() 

const { userRouter }= require("./routes/user.js")
const { courserRouter }= require("./routes/course.js")

app.use('/user',userRouter);
app.use('/course',courserRouter);

app.listen(3000);
