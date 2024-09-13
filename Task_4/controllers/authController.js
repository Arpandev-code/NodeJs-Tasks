const User= require('../model/user')
const authController = require('./userController')

exports.getRegister= (req,res)=>{
    res.render('register')
}
exports.postRegister= async (req,res)=>{
    
    try {
        const {name,email,password}=req.body 
        await User.createUser({name,email,password})
        res.redirect('/login')
    } catch (error) {
        res.stasus(500).send('Server Error'+error)
    }
}
exports.getLogin= (req,res)=>{
    res.render('login')
}
exports.postLogin= async (req,res)=>{
    try {
        const {email,password}=req.body
        const user =await User.findOne({where:{email}})
        if(!user)
        {
            res.stasus(500).send('Invalid email or password')
        }
        if(user.password!==password)
        {
            res.stasus(500).send('Invalid email or password')
        }
        res.redirect('/users')
    } catch (error) {
        res.send(500).send('Server Error'+error)
    }
}