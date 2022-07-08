var geekTime = require('./lib')

geekTime.addListener("newlesson", (res) => {
    console.log("get price", res)
})