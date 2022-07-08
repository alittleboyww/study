const net = require('net')

const socket = new net.Socket({})

socket.connect({
    host: "127.0.0.1",
    port: 4000
})

// socket.write("good morning geekbang 中文")
const ids = [1, 2, 3, 4, 5, 6, 7]

const buffer = Buffer.alloc(2)
buffer.writeInt16BE(
    ids[Math.floor(Math.random() * ids.length)]
)

socket.write(buffer)


socket.on('data', function(buffer) {
    console.log(buffer, buffer.toString())
})