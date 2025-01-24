const fs = require('fs')
const http = require('http')

// fs.readFile('example.txt', 'utf-8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(data)
// })

// const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur deserunt quod quas excepturi quasi, minus quibusdam eum tempora voluptatum porro odit perferendis nesciunt reprehenderit a explicabo, recusandae optio sunt provident ab doloribus? Officia, voluptatum! Ducimus perferendis enim quo deleniti incidunt expedita eligendi odit sunt omnis iste vitae doloremque asperiores ipsam nesciunt ad, reprehenderit unde modi! Quidem hic impedit obcaecati maiores voluptatem asperiores quam porro iusto consequatur inventore in maxime aliquid sit vel dolorum, quisquam reiciendis ut, cumque non tempora laudantium sequi reprehenderit. Magni ipsum, repellendus maxime quod maiores aliquam harum dolores aperiam hic enim molestias, cum neque. Recusandae, deserunt amet."

// fs.writeFile('Output.txt', content, (err) => {
//     if (err) {
//         console.error(err);
//     }
//     console.log("File Written Successfully");
// })


const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text-plain')
    res.end('Hello World')
})

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
})