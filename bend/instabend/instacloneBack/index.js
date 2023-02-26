const mongoose = require('mongoose');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

// ENV VARIABLES
const port = process.env.PORT || 3000;
const db_URL = process.env.DATABASE_URL


// CONNECTING TO DB
mongoose.set('strictQuery', true);
mongoose.connect(db_URL, () => { console.log('connected to db') })

// CONNECTING TO SERVER
app.listen(port, () => { console.log(`server is up at ${port}`) })