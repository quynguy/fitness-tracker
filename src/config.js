require('dotenv').config();

const mongoose = require("mongoose");
const connect = mongoose.connect(process.env.MONGO_URI);

// check database connection
connect.then(() => {
    console.log("Database Connection SUCCESSFUL");
})
    .catch(() => {
    console.log("Database Connection FAILED");
});