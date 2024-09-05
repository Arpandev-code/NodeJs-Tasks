const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('emp', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

sequelize.authenticate()
.then(()=>console.log("Database Connected..........."))
.catch((error)=>console.log(`Error at connecting DB:${error}`)
)
module.exports=sequelize;
