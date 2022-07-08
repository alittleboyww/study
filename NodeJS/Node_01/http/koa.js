const koa = require("koa")
const mount = require("koa-mount")
const fs = require("fs")

const app = new koa();

// 支持异步next
app.use(
    mount('/favicon.ico', function(ctx, next) {
        ctx.status = 200;
    })
)

app.use(
    mount('/', function (ctx) {
        ctx.body = fs.readFileSync(__dirname + "/http.html", "utf-8")
    })
)

app.listen(3000)


























