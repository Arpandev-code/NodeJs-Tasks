const User = require('../models/user');
const Admin= require('../models/admin')

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.render('users', { users });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        await User.create({ name, email });
        res.redirect('/users');
    } catch (error) {
        res.status(500).send('Server Error');
    }
};


exports.getEditUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.render('editUser', { user });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        user.name = name;
        user.email = email;
        await user.save();
        res.redirect('/users');
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        await user.destroy();
        res.redirect('/users');
    } catch (error) {
        res.status(500).send('Server Error');
    }
};
