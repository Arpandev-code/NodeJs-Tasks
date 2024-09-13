const {DataTypes}= require('sequelize')
const sequelize =  require('../config/database')

const User= sequelize.define('User',
    {
        name:{
            type:DataTypes.STRING(50),
            allowNull:false,
        },
        email:{
            type:DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        
        address:{
            type:DataTypes.STRING(100),
            allowNull:false
        },
        createdAt:{
            type: DataTypes.DATE,
            allowNull:true,
        },
        createdBy:{
            type: DataTypes.STRING,
            allowNull:true,
        },
        updatedAt:{
            type: DataTypes.DATE,
            allowNull:true,
        },
        updatedBy:{
            type: DataTypes.STRING,
            allowNull:true
        },
    },{
        tableName:'user',
        timeStamps:false,
    }
)
module.exports=User
