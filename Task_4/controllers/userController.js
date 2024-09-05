const User= require('../model/user')

/*
 Creates a new user with the provided name, email, and address.
 *
 * @param {Object} req - The request object containing the user data.
 * @param {Object} res - The response object used to send the response.
 * @return {Promise<void>} A promise that resolves when the user is created successfully, or rejects with an error message.
*/
exports.renderCreateUserForm = async (req, res) => {
    res.render('createUser');
};

exports.createUser=async (req,res)=>{
    try {
        const {name,email,address}=req.body
        await User.create({name,email,address})
        res.redirect('/users')
    } catch (error) {
       res.status(500).send(`CreateUser: Server Error ${error}`)
    }

}
// Retrieves all users from the database and renders the user table view.
exports.getAllUsers=async (req,res)=>{
    try {
        const users=await User.findAll()
        console.log(JSON.stringify(users));
        
        res.render('userTable',{users})
    } catch (error) {
        res.status(500).send("Server Error"+error)
    }
}

exports.updateUser=async (req,res)=>{
    try {
        const {name,email,address}=req.body
        const userId = req.params.id;
        const user= await User.findByPk(userId)
        if(!user)
        {
            res.status(500).send('User Not Found')
        }
        user.name=name
        user.email=email
        user.address=address
        user.save()
        res.redirect('/users')
    } catch (error) {
        res.status(500).send('updateUser Server Error'+error)
    }
}
exports.getEditUsers= async (req,res)=>{
    try {
        const userId = req.params.id;
        console.log("UserId"+userId);
        
        const user= await User.findByPk(userId)
        if(!user)
        {
            res.status(500).send('No User found')
        }
        console.log(user);
        
        res.render('editUser',{ user })
    } catch (error) {
        res.status(500).send('getEditUser Server Error'+error)
    }
}
exports.deleteUser=async (req,res)=>{
    try {
        const userId = req.params.id;
       const user = await User.findByPk(userId)
       if(!user)
        {
            res.status(500).send("User Not found")
        }
        await user.destroy()
        res.redirect('/users')
    } catch (error) {
        res.status(500).send("Server Error"+error)
    }
}
