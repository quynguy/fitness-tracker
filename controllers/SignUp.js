// Register User

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const usersDB = require('../models/Users');


router.post("/signup", async (req, res) => {

    // get data from body > send through sign up form
    const data = {
        name: req.body.username,
        password: req.body.password
    }

    // check if user already exists in the database
    const userExists = await usersDB.findOne({ name: data.name });
    if (userExists) {
        res.send("User already exists. Please choose a different username.");
    } else {
        // hash password (bcrypt)
        const saltRounds = 10;
        const hasedPassword = await bcrypt.hash(data.password, saltRounds);

        data.password = hasedPassword; // replace hash password with original password

        const userdata = await usersDB.insertMany(data);
        console.log(userdata);
    }
})

module.exports = router;