const {connectDB}=require("./config/db.connect");
const express=require('express');
const app=express();
require("dotenv").config();
const port=process.env.PORT;
const userRouter=require("./routes/user.routes");
app.use(express.json());

connectDB().then(()=>console.log("Database connected")).then(()=>{
    app.listen(port,async(req,res)=>{
        console.log("Express running port",port);
    })
})

app.use("/api/user",userRouter);