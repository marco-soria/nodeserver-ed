const express = require('express');
const app = express();

const userRouter = require('./src/routers/userRouter');
const authRouter = require('./src/routers/authRouter');
//const userLogged = require('./src/middlewares/userLogged');
const connection = require('./src/database/connection');
const morgan = require('morgan');
const path = require('path');


app.get('/', (req, res) => {
    //res.send('Hello World!');
    const data = {
        "title": "Home",
        "message": "Hello World!",
        "showMessage": false
    }
    res.render('index', data);
    });


app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use(express.json());
app.use(morgan('dev'));
//app.use(userLogged);
app.use('/users', userRouter);
app.use('/auth', authRouter);

PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});