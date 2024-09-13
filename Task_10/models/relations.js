const User = require('./user');
const Brand = require('./brand');

/**
 *  A Brand can have many Users (One-to-Many)
*/
Brand.hasMany(User, {
    foreignKey: 'brandId',
    as: 'users'
});

/**
 *  A User belongs to one Brand
*/
User.belongsTo(Brand, {
    foreignKey: 'brandId',
    as: 'brand'
});
