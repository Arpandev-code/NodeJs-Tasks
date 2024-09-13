const {DataTypes}=require('sequelize')
const sequelize=require('../config/database')

const Employee= sequelize.define('Employee',
    {
        empName:{
            type:DataTypes.STRING(50),
            allowNull:false        
        },
        empEmail:{
            type:DataTypes.STRING,
            allowNull:false
        },
        empPhone:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        },
        position: {
            type: DataTypes.STRING,
            allowNull: false
          },
        salary: {
            type: DataTypes.FLOAT,
            allowNull: false
          },
    },{
        timeStamps:false,
        tableName:'employee'
    }
)

module.exports=Employee