//import modules
const express = require('express');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const apiRoute = require('./routes/api');

const app = express();
const PORT = 3000;

//Apply Middleware
app.use(express.json());
app.use(loggerMiddleware);


//Mount routes
app.use('/api', apiRoutes);

//Error handling
app.use((err, req, res, next) =>{
    console.log(err.message);
    res.status(500).send({error: 'Internal Server Error'});
});

