const express = require('express')

const app = express()


app.get('/', function (req, res) {
    res.send('Hello World!');
  });

app.use('/test1')
app.use('/test2')
app.use('/user')

app.listen(3000,function(){
    console.log('3000 server start')
})