const net = require('net')


const idKeyValue = {
    1: "一",
    2: "二",
    3: "三",
    4: "四",
    5: "五",
    6: "六",
    7: "七",
}


const server = net.createServer(socket => {
    socket.on('data', function(buffer) {
        console.log(buffer)
        var id = buffer.readInt16BE()
        console.log(id)
        setTimeout(() => {
            socket.write(
                idKeyValue[id]
            )
        }, 500)
    })
})

server.listen(4000)