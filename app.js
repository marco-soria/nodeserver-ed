const express = require('express')
const app = express()

const userRouter = require('./src/routers/userRouter');
const authRouter = require('./src/routers/authRouter');
const dashboardRouter = require('./src/routers/dashboardRouter');

const connection = require('./src/database/connection')
const morgan = require('morgan')
const path = require('path')
const socket = require('socket.io')



app.get('/', (req, res) => {
    //res.send('Hello World!');
    const data = {
        "title": "Home",
        "message": "Hello World!",
        "showMessage": false
    }
    res.render('index', data);
    });

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/public'))

app.use(express.json())
app.use(morgan('dev'))

app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/dashboard', dashboardRouter);

const server = require('http').createServer(app)
const io = socket(server)
require('./socket')(io)

PORT = process.env.PORT || 3002;

server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`);
})

module.exports = app