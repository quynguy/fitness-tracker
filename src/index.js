const express = require('express');
const app = express();
const path = require('path');

const Users = require('./config');
const loginController = require('../controllers/Login');
const signupController = require('../controllers/SignUp');

const bcrypt = require('bcrypt');

// convert data into json format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// static folder path
app.use(express.static('public'))

// view engine setup
app.set('view engine', 'ejs')

//routes
app.get('/', (req, res) => {
    res.render('index')
})

app.get('/home', (req, res) => {
    res.render('home')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/signup', (req, res) => {
    res.render('home')
})

app.post('/login', loginController);

app.post('/signup', signupController);


app.listen(3000, () => {
    console.log('Server is running on port 3000')

})