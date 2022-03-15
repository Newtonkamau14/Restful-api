const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

mongoose.connect('mongodb://localhost:27017/restfulapi',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.once('open',() =>{
    console.log('Connected to database')
});

app.use(bodyParser.json());

app.get('/',(req,res) => {
    res.send("Hello")
});

const QuotesRoutes = require('./routes/Quotes')
app.use('/quotes',QuotesRoutes)



app.listen(3000,console.log("Listening on port 3000"))