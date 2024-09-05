const User=require('../models/user')

//  render the form
exports.renderCreateUserForm = async (req, res) => {
    res.render('userCreate');
};

//handle form submission and create the user
exports.createUsers = async (req, res) => {
    try {
        const { name, email } = req.body;
        await User.create({ name, email });
        res.redirect('/users'); // Redirect to the users list
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

//get alluser
exports.getAllUsers= async (req,res)=>{
    try {
       const user= await User.findAll() 
       res.render('userListView',{user})
    } catch (error) {
        
    }
}

//Edit User Details
exports.updateUser= async(res,req)=>{
    try {
        const {name,email}=res.body;
        const user= await User.findByPk(req.params.id)
        if(!user)
        {
            res.status(500).send('UserNot found')
        }
        user.name=name;
        user.email=email;
        await user.save()
        res.redirect('/userListView',{user})

    } catch (error) {
       
    }
}
//get Edit users
exports.getEditUsers= async (res,req)=>{
    try {
        const user= User.findByPk(req.params.id);
        if(!user)
        {
            res.status(500).send("No user found")
        }
        res.render('editUser',{user})
    } catch (error) {
        
    }
}

exports.deleteUser=async(res,req)=>{
    try {
        const user= User.findByPk(req.params.id);
        if(!user)
        {
            res.status(500).send("No Such User Found")
        }
        await user.destroy()
        res.redirect('/users')
    } catch (error) {
       
    }
}

