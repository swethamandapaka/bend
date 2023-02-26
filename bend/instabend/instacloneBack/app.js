const express = require('express');
const cors = require('cors');
const postsRoutes = require('./routes/postsRoute');

const app = express()

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));

app.use(cors())

app.get('/', (req, res) => {
    res.send("Ok.")
})

app.use('/', postsRoutes)

module.exports = app