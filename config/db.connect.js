
const mongoose=require('mongoose');
require('dotenv').config();
const mongoUrl=process.env.MONGO_URL;

const connectDB=async()=>{
    return await mongoose.connect(mongoUrl);
}
module.exports={connectDB}