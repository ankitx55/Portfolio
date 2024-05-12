//setting up express and mongoose
const express =  require('express');
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


//setting up express as "app"
const app = express();


//Setting up the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))



//for homepage
app.get('/', (req, res) => {
    res.render('home')
});


