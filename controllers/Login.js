// Login User

const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

const usersDB = require('../models/Users');


router.post ("/login", async (req, res) => {
    try {
        const check = await usersDB.findOne({ name: req.body.username });
        if(!check) {
            res.send("Unable to locate user. Please sign up.");
        }

        // compare hash password from database to plain text 

        const passwordMatch = await bcrypt.compare(req.body.password, check.password);
        if (passwordMatch) {
            res.render("home");

        } else {
            req.send("Incorrect password. Please try again.");
        }
    }catch{
        res.send("Incorrect Password or unable to locate user. Please sign up.");
    }

});

module.exports = router;