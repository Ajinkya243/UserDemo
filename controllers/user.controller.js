const{User}=require('../models/User.models');
const bcrypt=require('bcrypt');

const addUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const existUser=await User.findOne({email});
        if(existUser){
            return res.status(400).json({message:"User already register"});
        }
        const bcryptPassword=await bcrypt.hash(password,10);

        const user=new User({...req.body,password:bcryptPassword});
        await user.save();
        res.status(201).json({message:"User added",user})
    }
    catch(error){
        res.status(500).json({message:"Something went wrong",error})
    }
}

const getUser=async(req,res)=>{
    try{
        const{id}=req.params;
        const user= await User.findById(id);
        if(!user){
            response.status(404).json({message:"User not found"});
        }
        res.status(200).json(user);
    }
    catch(error){

    }
}

module.exports={addUser,getUser}