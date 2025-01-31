const fs = require('fs');
const http = require('http');
const path = require('path');
const os = require('os');
const url = require('url');
const crypto = require('crypto');
const sayHello = require('./greeting');
const math = require('./math');


//File System Module (Read File)
// fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data)
// })

//File System Module (Write File)
// const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt quod quas excepturi quasi, minus quibusdam eum tempora voluptatum porro odit perferendis nesciunt reprehenderit a explicabo, recusandae optio sunt provident ab doloribus? Officia, voluptatum! Ducimus perferendis enim quo deleniti incidunt expedita eligendi odit sunt omnis iste vitae doloremque asperiores ipsam nesciunt ad, reprehenderit unde modi! Quidem hic impedit obcaecati maiores voluptatem asperiores quam porro iusto consequatur inventore in maxime aliquid sit vel dolorum, quisquam reiciendis ut, cumque non tempora laudantium sequi reprehenderit. Magni ipsum, repellendus maxime quod maiores aliquam harum dolores aperiam hic enim molestias, cum neque. Recusandae, deserunt amet."


// fs.writeFile('Output.txt', content, (err) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log("File Written Successfully");
// })

//Server Module
// const server = http.createServer((req, res) => {
//     res.statusCode = 200
//     res.setHeader('Content-Type', 'text-plain')
//     res.end('Hello World')
// })

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000');
// })

// Path Module
// const directory = '/user/local'
// const fileName = 'example.txt'

// const filePath = path.join(directory, fileName);

// console.log(filePath);


// OS Module
// console.log('Platform: ', os.platform());
// console.log('CPU Arichitecture: ', os.arch());
// console.log('Total Memory: ', os.totalmem());
// console.log('Free Memory: ', os.freemem());
// console.log('Home Directory: ', os.homedir());
// console.log('Uptime: ', os.uptime());
// console.log('User Info: ', os.userInfo());
// console.log('Load Average: ', os.loadavg());
// console.log('Network Interfaces: ', os.networkInterfaces());
// console.log('Release Info: ', os.release());
// console.log('Temp Directory: ', os.tmpdir());
// console.log('Type: ', os.type());
// console.log('Version: ', os.version());
// console.log('CPUs: ', os.cpus());
// console.log('Endianness: ', os.endianness());
// console.log('Constants: ', os.constants);
// console.log('EOL: ', os.EOL);
// console.log('Hostname: ', os.hostname());

//URL Module
// const myUrl = new URL('http://example.com:8000/path/name?query=hello#hash');
// console.log('Host: ', myUrl.host);
// console.log('Hostname: ', myUrl.hostname);
// console.log('Pathname: ', myUrl.pathname);
// console.log('Search: ', myUrl.search);
// console.log('Hash: ', myUrl.hash);
// console.log('Origin: ', myUrl.origin);
// console.log('Port: ', myUrl.port);
// console.log('Protocol: ', myUrl.protocol);
// console.log('Username: ', myUrl.username);
// console.log('Search Params: ', myUrl.searchParams.get('query'));

// Crypto Module

// const hash = crypto.createHash('sha256');
// hash.update('Hello, World');

// console.log(hash.digest('hex'));

const message = sayHello('Developers');

console.log(message);
console.log(math.add(5, 2));
console.log(math.subtract(10, 5));