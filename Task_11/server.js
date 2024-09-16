const express= require('express')
const sequelize= require('./config/database')
const app =new express();
const authRoutes=require('./routes/api/authRoutes')

app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api',authRoutes)

sequelize.sync()
.then(()=>{
    app.listen(3000,()=>console.log("Server started on http://localhost:3000"))
})
.catch(err => console.log('Error: ' + err));