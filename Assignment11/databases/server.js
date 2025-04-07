const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const { Pool } = require('pg');
const routes = require('./api');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;

const personalPool = new Pool({  host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_PERSONALINFO,
    port: process.env.DB_PORT, });
const hobbiesPool = new Pool({  host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_HOBBIES,
    port: process.env.DB_PORT, });

app.locals.personalDB = personalPool;
app.locals.hobbiesDB = hobbiesPool;

app.use('/api', routes);

app.listen(PORT, () => {
  console.log('Server running on http://localhost:3000');
});