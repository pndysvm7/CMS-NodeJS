
const express = require('express');
const app = express();
const path = require('path')
const hbs = require('express-handlebars')
const port = process.env.PORT || 8000;





app.use(express.static( path.join(__dirname , 'publicfiles')  )); // now static files in publicfiles directories can be used easily


//set view engine
app.engine('handlebars', hbs.engine( {defaultLayout : 'home'} )    )  
app.set('view engine', 'handlebars');

//load routes
const mainRouter = require('./routes/home/index');
const adminRouter = require('./routes/admin/index');
const posts = require('./routes/admin/posts');


//use routes
app.use('/', mainRouter);  // everytime anyone goes to home page mainRouter will run
app.use('/admin', adminRouter);
app.use('/admin/posts',posts);



app.listen(port , (err) => {
    if(err){
        console.log('error in server connection')
    }
    console.log(`server is successfully running on ${port}`)
})

