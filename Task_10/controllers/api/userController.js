const User = require('../../models/user');
const Brand = require('../../models/brand');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({
            include: [{
                model: Brand,
                as: 'brand',
                attributes: ['title']
            }]
        });
        if (users.length > 0) {
            const formattedUsers = users.map(user => ({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                brandId: user.brandId,
                createdBy: user.createdBy,
                createdAt: user.createdAt,
                updatedBy: user.updatedBy,
                updatedAt: user.updatedAt,
                brandName: user.brand ? user.brand.title : null
            }));
            return res.status(200).send({ data: { success: true, list: formattedUsers }, errorNode: { errorCode: 0, errorMessage: "No Error" } });
        } else {
            return res.status(200).send({ data: { success: true, list: formattedUsers }, errorNode: { errorCode: 0, errorMessage: "No Error" } });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.getUserDetails = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findOne({
            include: [{
                model: Brand,
                as: 'brand',
                attributes: ['title']
            }]
        });
        if (user) {
            const userWithBrand = {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password,
                brandId: user.brandId,
                createdBy: user.createdBy,
                createdAt: user.createdAt,
                updatedBy: user.updatedBy,
                updatedAt: user.updatedAt,
                brandName: user.brand ? user.brand.title : null
            };
            return res.status(200).send({ data:{success:true,details:userWithBrand},errorNode:{errorCode:0, errorMessage:"No Error"}}); 
        } else {
            return res.status(200).send({ data:{success:true,details:{}},errorNode:{errorCode:0, errorMessage:"No Error"}});
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.createUser = async (req, res) => {
    const { name, email, password, brandId } = req.body;
    try {
        const newUser = await User.create({ name, email, password, brandId });
        res.status(201).json(newUser);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.updateUser = async (req, res) => {
    const { id, name, email, password, brandId } = req.body;
    console.log(req.body);
    console.log("xxxxxxxxxxxxxxxxxxxxxxxxxxxxx")
    try {
        const user = await User.findByPk(id);
        if (user) {
            user.name = name || user.name;
            user.email = email || user.email;
            user.password = password || user.password;
            user.brandId = brandId || user.brandId;
            await user.save();
            res.json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};

exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findByPk(id);
        if (user) {
            await user.destroy();
            res.json({ message: 'User deleted' });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};
