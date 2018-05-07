/**
 * Created by xianm on 2018-02-22.
 */
const express = require('express'),
      app = express(),
      bodyParser = require('body-parser'),
      cookieParser = require('cookie-parser'),
      userRouter = require('./user'),
      server = require('http').Server(app),
      io = require('socket.io')(server)
// the socket passed in is the socket of the current connection
// io is the global connection
io.on('connection', socket=>{
    console.log('user logged in')
})
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/user', userRouter)
server.listen(9093, ()=>console.log('server is listening to port 9093'))

