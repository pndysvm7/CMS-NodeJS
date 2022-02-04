// in views we rae going to keep our templates and htmls , handlebars and other stuffs
// public data can be grabbed easily
// routes will store all the app routes
// configs will contain some secret data

// app.js is our server

const express = require('express');

const app = express();
const port = process.env.PORT || 8000;

app.get('/' , (req, res) => {
    res.send('i am home page')

})

app.listen(port , (err) => {
    if(err){
        console.log('error in server connection')
    }
    console.log(`server is successfully running on ${port}`)
})

