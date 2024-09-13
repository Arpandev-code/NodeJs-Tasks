const {DataTypes}=require('sequelize')
const sequelize=require('../config/database')

const Tasks= sequelize.define('Tasks',
    {
        empId:{
            type:DataTypes.INTEGER,
            allowNull:true
        },
        taskName:{
            type:DataTypes.STRING(50),
            allowNull:true
        },
        taskDescription:{
            type:DataTypes.STRING,
            allowNull:true
        },
        taskStatus:{
            type:DataTypes.STRING,
            allowNull:true
        },
},{
    tableName:'tasks',
    timestamps:false
}
)
module.exports=Tasks