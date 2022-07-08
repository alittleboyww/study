const koa = require("koa")
const fs = require("fs")
const mount = require("koa-mount")
const static = require("koa-static")


const app = new koa()

// 插件  设置静态目录
app.use(
    static(__dirname + "/source/")
)

app.use(
    mount("/", async (ctx) => {
        ctx.body = fs.readFileSync(__dirname + "/source/index.html", "utf-8")
    })
)


app.listen(3000)