const express = require('express')
const fs = require('fs')

const app = express()

app.get("/favicon.ico", function (req, res) {
    console.log("列表")
    res.writeHead(200)
    res.end()
})

app.get("/", function(req, res) {
    console.log("页面")
    res.writeHead(200);
    fs.createReadStream(__dirname + "/http.html").pipe(res)
})

app.listen(3000)



