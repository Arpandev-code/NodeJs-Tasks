const User = require('../models/user');
const Brand = require('../models/brand');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Brand,
                as: 'brand',
                attributes: ['title']
            }]
        });
        console.log(JSON.stringify(users));
        console.log("((((((((((((((((((((((999999))))))))))))))))))))))");
        

        const brands = await Brand.findAll({
            attributes: ['id', 'title']
        });

        res.render('users', { users, brands });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.createUser = async (req, res) => {
    try {
        const { name, email, password, brandId } = req.body;
        await User.create({ name, email, password, brandId });
        res.redirect('/users');
    } catch (error) {
        res.status(500).send('Server Error');
    }
};


exports.getEditUser = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id);
        const brands = await Brand.findAll();
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.render('editUser', { user, brands });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.updateUser = async (req, res) => {
    try {
        const { name, email, brandId } = req.body;
        const user = await User.findByPk(req.params.id);
        if (!user) {
            return res.render('editUser', { error: 'User not found' });
        }
        user.name = name;
        user.email = email;
        user.brandId = brandId;
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
