const express = require('express');
const app = express();

const userRouter = require('./src/routers/userRouter');


app.get('/', (req, res) => {
    res.send('Hello World!');
    });

app.use('/users', userRouter);

PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});