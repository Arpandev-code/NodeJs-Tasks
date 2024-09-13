const Employee= require('../models/employee')
const Tasks=require('../models/tasks')

exports.getEmployees = async (req, res) => {
    try {
        const employees = await Employee.findAll({
            include: [{
                model: Tasks,
                as: 'tasks',
                attributes: ['taskName', 'taskDescription', 'taskStatus'],
            }]
        });
        console.log(JSON.stringify(users));
        

        const tasks = await Tasks.findAll({
            attributes: ['id','taskName', 'taskDescription', 'taskStatus']
        });

        res.render('users', { employees, tasks });
    } catch (error) {
        res.status(500).send('Server Error');
    }
};

exports.getEditEmployee = async (req, res) => {
    try {
        const employee = await Employee.findByPk(req.params.id);
        const tasks=await Tasks.findAll();
        if (!employee) {
            return res.status(404).send('Employee not found');
        }
        res.render('editEmployee', { employee,tasks});
    } catch (error) {
        res.status(500).send('Server Error');
    }
};