const express = require('express');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');
const apiUserRoutes = require('./routes/api/userRoutes');
const sequelize = require('./config/database');
require('./models/relations');

const app = express();

app.set('view engine', 'ejs');

app.use(express.json());

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

app.use(session({
    secret: 'abcdefgh',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1800000
    }
}));

app.use(authRoutes);
app.use(userRoutes);
app.use('/api', apiUserRoutes);

app.get('/', (req, res) => {
    res.render('login');
});

// app.use(userRoutes);
// app.use('/', authRoutes);

sequelize.sync()
    .then(() => {
        app.listen(3000, () => console.log('Server started on http://localhost:3000'));
    })
    .catch(err => console.log('Error: ' + err));
