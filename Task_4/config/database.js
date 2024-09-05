//Initializes a new Sequelize instance to connect to the MySQL database.
const { Sequelize } = require('sequelize');

//Creates a new Sequelize instance with the specified database credentials.
const sequelize = new Sequelize('staff', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});
//Authenticates the database connection.
//A promise that resolves when the connection is successful, or rejects with an error message.
sequelize.authenticate()
.then(()=>console.log("Database Connected..........."))
.catch((error)=>console.log(`Error at connecting DB:${error}`)
)
// Exports the Sequelize instance for use in other modules.
module.exports=sequelize;
