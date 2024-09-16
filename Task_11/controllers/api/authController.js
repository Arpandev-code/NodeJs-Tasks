const User = require('../../models/userModel');
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
exports.register=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        const hashedPassword= await bcrypt.hash(password,10)
        await User.create({name,email,password:hashedPassword})
        res.status(201).json({message:'User created successfully'})
    } catch (error) {
        console.log(error);
        res.status(500).json({message:error})
    }
}
exports.login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user=await User.findOne({where:{email}})
        if(!user)
        {
            return res.status(404).json({message:'User not found'})
        }
        const isPasswordMatch=await bcrypt.compare(password,user.password)
        if(!isPasswordMatch)
        {
            return res.status(401).json({message:'Invalid password'})
        }
        const token=jwt.sign({id:user.id},'j34ty387t3t3u3yt7u3t73t',{
            expiresIn:'1hr'
        })
        res.status(200).json({message:'Login successful',token})
    } catch (error) {
        res.status(500).json({message:error})
    }
}
exports.getUserInfo=async(req,res)=>{
    try {
        const user=await User.findByPk(req.user.id,{
            attributes:['id','name','email']
        })
        if(!user)
        {
            return res.status(404).json({message:'User not found'})
        }
        res.status(201).json({user})
    } catch (error) {
        res.status(500).json({message:error})
    }
}