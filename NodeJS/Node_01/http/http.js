const http = require('http')
const querystring = require('querystring')
const url = require('url')
const fs = require('fs')


http.createServer(function (req, res) {
    var URL = new url.URL(req.url, "http://localhost:3000")
    var pathname = URL.pathname;
    
    if (pathname == "/favicon.ico") {
        res.writeHead(200);
        res.end();
        return;
    }
    var action = URL.searchParams.get("action")
    console.log(pathname)
    console.log(action)
    res.writeHead(200);
    fs.createReadStream(__dirname + "/http.html").pipe(res)
}).listen(3000)