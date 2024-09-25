// console.log("Hello");
const http = require('http');

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end('Hello world! \n');
});

const PORT = 4000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});