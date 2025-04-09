import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import pkg from 'pg';
import apiRoutes from './api.js';

const { Pool } = pkg;
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// DB Pools
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

//Mounting routs
app.use('/api', apiRoutes);

//Starting Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});