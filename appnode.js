const http = require('http');
const { parse } = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
    try {
        const parsedURL = url.parse(req.url, true);
        const { name } = parsedURL.query;


        if (req.url === '/' && req.method === 'GET') {
            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'Hello World' }));
            
        }
        else if (req.url === '/home' && req.method === 'GET') {
            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'Acceding to Home' }));
        }
        else if (parsedURL.pathname === '/profile' && req.method === 'GET') {
            res.statusCode = 200;
            res.end(JSON.stringify({ message: `Hello ${name}` }));
        }

        else if (req.url === '/register' && req.method === 'POST') {
            let body = '';
            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                const { name, email } = JSON.parse(body);
                res.statusCode = 200;
                res.end(JSON.stringify({ message: `Hello ${name}, your email is ${email}` }));
            });
        }

        else {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Not Found' }));
        }
        
    } catch (error) {
        res.statusCode = 500;
        res.end(JSON.stringify({ message: 'Internal Server Error' }));
        
    }
    
    
})

const port = process.env.PORT || 3002
const host = process.env.HOST || 'localhost'



server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`)
})