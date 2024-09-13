const sequelize = require('sequelize');

const sequelize = new sequelize('corpoffice', 'root', '', {
    host: 'localhost',
    dialect:'mysql'
})

sequelize.authenticate()
.then(()=>console.log('Database connected...'))
.catch((err)=>console.log('Error while connecting database: '+err))

module.exports = sequelize