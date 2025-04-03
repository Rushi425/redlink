const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", (req, res)=>{
    return res.send("HEllo Rushi");
});

module.exports = app;