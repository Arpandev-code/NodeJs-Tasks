const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.getRegister = (req, res) => {
    res.render('register');
};

exports.postRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await User.create({ name, email, password });

        req.session.user = { id: user.id, email: user.email, password: user.password };
        req.session.isLoggedIn = true;
        
        console.log("Registered and Logged In");
        console.log(req.session.user);
        console.log(req.session.isLoggedIn);
        
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};



exports.getLogin = (req, res) => {
    res.render('login');
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(400).send('Invalid email');
        }

        if (user.password !== password) {
            return res.status(400).send('Invalid password');
        }

        req.session.user = { id: user.id, email: user.email };
        req.session.isLoggedIn = true;

        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")
        console.log(req.session.user);
        console.log(req.session.isLoggedIn);
        console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@")

        res.redirect('/users');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};



exports.logout = (req, res) => {
    req.session.destroy(err => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
        res.redirect('/login');
    });
};