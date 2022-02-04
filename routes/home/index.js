
const express = require('express');

const router = express.Router()

router.all('/*'  , (req,res,next)=> {

    req.app.locals.layout = 'home';         // changing default layout for out handlebars
    next();
})  // /* everything after /


router.get('/' , (req, res) => {
    res.render('home/index')
    
})


router.get('/about' , (req, res) => {
    res.render('home/about')
    
})
router.get('/services' , (req, res) => {
    res.render('home/services')
    
})

router.get('/contact' , (req, res) => {
    res.render('home/contact')
    
})


router.get('/register' , (req, res) => {
    res.render('home/register')
    
})


router.get('/login' , (req, res) => {
    res.render('home/login')
    
})


module.exports = router;
