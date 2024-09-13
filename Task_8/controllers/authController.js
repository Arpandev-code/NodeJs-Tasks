const employee=require('../models/employee')

exports.getRegister=(req,res)=>{
    const positions = ['Developer', 'Designer', 'Manager', 'Tester'];
    res.render('register',{error:'',positions})
}

exports.postRegister= async(req,res)=>{
    try {
        const {empName,empEmail,empPassword,empPhone,position,salary}=req.body
        await employee.create({empName,empEmail,empPassword,empPhone,position,salary})
        res.redirect('/login')
    } catch (error) {
        res.render('register',{error})
    }
}
exports.getLogin=(req,res)=>{
    res.render('login',{error:''})
}

exports.postLogin= async(req,res)=>{
    const {email,password}=req.body
    try {
        const user = await employee.findOne({ where: { empEmail: email } });
        if (!user) {
            return res.render('login', { error: 'Invalid email or password' });
        }
        if (user.empPassword !== password) {
            return res.render('login', { error: 'Invalid email or password' });
        }
        res.redirect('/employee')
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
}