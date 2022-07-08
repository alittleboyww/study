const buffer1 = Buffer.from("字符串")
const buffer2 = Buffer.from([1, 3, 6])

const buffer3 = Buffer.alloc(20);

console.log(buffer1)
console.log(buffer2)
console.log(buffer3)

buffer2.writeInt8(12, 1)
console.log(buffer2)

// LE 和 BE在于二进制的大端排布和小端排布
buffer2.writeInt16BE(512, 1)
console.log(buffer2)
buffer2.writeInt16LE(512, 1)
console.log(buffer2)

const fs = require('fs')
const protobuf = require('protocol-buffers')
const schema = protobuf(fs.readFileSync(__dirname + "/test.proto"), 'utf-8')

const buffer5 = schema.Column.encode({
    id: 1,
    name: "中文",
    price: "23.4"
})

console.log(schema.Column.decode(buffer5))
















