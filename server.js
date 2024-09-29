const express = require('express');
const db = require('./config/db')
const userRoutes = require('./routes/userRoutes')
const blogRoutes = require('./routes/blogRoutes')
const bodyParsor = require('body-parser');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;
app.use(bodyParsor.json());



app.get('/', (req, res) => {
    res.send("hello from server")
    console.log("hello server")
})

app.use('/user', userRoutes)

app.use('/blog', blogRoutes)

app.listen(PORT, () => {
    console.log("server in on")
})