const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Brand = sequelize.define('Brand', {
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    slug: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    shortDescriptions: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    descriptions: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    createdBy: {
        type: DataTypes.STRING,
        allowNull: true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true
    },
    updatedBy: {
        type: DataTypes.STRING,
        allowNull: true
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true
    }
}, {
    tableName: 'brands',
    timestamps: false
});



module.exports = Brand;
