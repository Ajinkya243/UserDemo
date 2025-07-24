const {connectDB}=require("./config/db.connect");
const express=require('express');
const cors=require('cors');
const app=express();
require("dotenv").config();
const port=process.env.PORT;
const userRouter=require("./routes/user.routes");
app.use(express.json());
app.use(cors())

app.get("/",async(req,res)=>{
    res.json({message:"User connected"})
})

app.use("/api/user",userRouter);
connectDB().then(()=>console.log("Database connected")).then(()=>{
    app.listen(port,async(req,res)=>{
        console.log("Express running port",port);
    })
})


