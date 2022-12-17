const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Router = require('./routers/Router')
const port = process.env.port || 8080;

const app = express();


mongoose.connect("mongodb://127.0.0.1:27017/NamtFashion")
const db = mongoose.connection;

db.on("error",()=>{console.log("error in conection");})
db.once('open',()=>{console.log("Connected");})

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/', Router)

app.listen(port)