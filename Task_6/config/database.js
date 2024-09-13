const { sequelize } = require('sequelize');

const sequelize = new Sequelize('college', 'root', '',{
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
.then(() => console.log('Database connected...'))
.catch((err)=>console.log('Database connection failed: '+err));