const express = require('express')
const axios = require('axios')
const cookieParser = require("cookie-parser");
const app = express()

require("dotenv").config();

const test1 = require('./router/test1')
const test2 = require('./router/test2')
const user = require('./router/user')
const delay = require('./router/delay')


app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('http://hc.check/_ah/health', function (req, res) {
    return res.status(200).send('OK');
  });

app.use('/test1',test1)
app.use('/test2',test2)
app.use('/user',user)
app.use('/delay',delay)

app.listen(8080,function(){
    console.log('8080 server start')
})

module.exports = app;