const sequelize=require('../config/database')
const {DataTypes}=require('sequelize');

const User=sequelize.define('user',{
    name:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
},{
    timeStamps:false,
    tableName:'user'
}
)
module.exports=User