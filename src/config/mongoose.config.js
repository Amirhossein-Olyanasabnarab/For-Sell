const mongoose = require('mongoose');
require('dotenv').config();

const DB_HOST = process.env.DB_HOST;

mongoose.connect(DB_HOST)
    .then(() => {
        console.log("The MongoDB was connected.")
    }).catch(err => {
        console.log(`Connecting was failed => ${err.message}`)
    });