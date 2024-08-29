const http = require('http');

const server = http.createServer((req, res) => {
    res.send('Hello World')   
})

const port = process.env.PORT || 3002
const host = process.env.HOST || 'localhost'



server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})