const express = require('express');
const sequelize = require('./config/database');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('login');
});

app.use(userRoutes);

app.use('/', authRoutes);

sequelize.sync()
    .then(() => {
        app.listen(3000, () => console.log('Server started on http://localhost:3000'));
    })
    .catch(err => console.log('Error: ' + err));