const sequelize=require('sequelize');

const Sequelize = new sequelize('testonedb', 'root', '', {
    host:'localhost',
    dialect:'mysql'
})

Sequelize.authenticate()
.then(()=>console.log('Database connected...'))
.catch((err)=>console.log('Error while connecting database: '+err))

module.exports=Sequelize