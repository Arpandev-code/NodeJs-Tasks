const Employee=require('./employee')
const Tasks=require('./tasks')

//Employee can have multiple tasks, One to Many
Employee.hasMany(Tasks,{
    foreignKey:'empId',
    as:'tasks'
})
Tasks.belongsTo(Employee,{
    foreignKey:'empId',
    as:'employee'
})