const http = require('http')
const path = require('path')
const fs = require("fs")
const port = 3000

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, "index.html")

    fs.readFile(filePath, (err, data) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "html")
        res.end(data)
    })

})

server.listen(port, () => {
    console.log("Server rodando")
})