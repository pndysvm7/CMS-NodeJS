const express = require('express');

const router = express.Router();

router.all('/*'  , (req,res,next)=> {

    req.app.locals.layout = 'admin';         // changing default layout for out handlebars
    next();
})  // /* everything after admin

router.get('/', (req,res)=> {
    res.send('yes working')
})


module.exports = router;