const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const { sendContactEmail } = require('./controllers/contactController');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res)=>{
    return res.send("HEllo Rushi");
});

app.post('/api/contact', sendContactEmail);

module.exports = app;