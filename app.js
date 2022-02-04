
const express = require('express');
const app = express();
const path = require('path')
const hbs = require('express-handlebars')
const port = process.env.PORT || 8000;





app.use(express.static( path.join(__dirname , 'public')  )); // now static files in public directories can be used easily


app.engine('handlebars', hbs.engine( {defaultLayout : 'home'} )    )  
app.set('view engine', 'handlebars');


app.get('/' , (req, res) => {
    res.render('home/index')
    
})


app.get('/about' , (req, res) => {
    res.render('home/about')
    
})

app.listen(port , (err) => {
    if(err){
        console.log('error in server connection')
    }
    console.log(`server is successfully running on ${port}`)
})

