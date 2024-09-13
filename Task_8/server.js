const express= require('express')
const sequelize= require('./config/database')
const userController= require('./controllers/userController')
require('./models/relations')

const app=express()

app.set('view engine','ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))



sequelize.sync()
.then(()=>{
    app.listen(3000,()=>console.log("Server started on http://localhost:3000")
    )
})
.catch(err => console.log('Error: ' + err));
