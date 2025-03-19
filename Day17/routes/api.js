const express = require('express');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/public', (req, res) =>{
    res.send({message : 'Welcome to the Public API!'});
});

//protected route

router.get('/protected', authMiddleware, (req, res) =>{
    res.send({message: 'Welcome to the protected API!'});
});

router.get('/error', (req, res, next) =>{
    const error = new Error('Something went wrong!');
    next(error);
})

module.exports = router;
