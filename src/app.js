require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');

const { NODE_ENV} = require('./config')
const articlesRouter = require('./articles/articles-router');
const usersRouter= require('./users/users-router')
const commentsRouter=require('./comments/comments-router')

const app =express();

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common;';

app.use(morgan(morganOption));
app.use(cors());
app.use (helmet());


app.use('/api/comments', commentsRouter)
app.use('/api/articles', articlesRouter)
app.use('/api/users', usersRouter)

app.get('/', (req,res) => {
    res.send("Hello, world!");
});


app.get('/xss', (req,res)=>{
    res.cookie('secretToken', '123456789');
    res.sendFile(__dirname + '/xss-example.html')
})




module.exports = app;