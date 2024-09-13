const bcrypt = require('bcrypt');
const User = require('../models/user');

exports.getRegister = (req, res) => {
    res.render('register');
};

exports.postRegister = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await User.create({ name, email, password });
        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};


exports.getLogin = (req, res) => {
    res.render('login',{error: ''});
};

exports.postLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.render('login', { error: 'Invalid email or password' });
        }

        if (user.password !== password) {
            return res.render('login', { error: 'Invalid email or password' });
        }

        res.redirect('/users');
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
};

