const glob = require('glob')

// 阻塞性io
var reuslt = null
console.time('glob')
reuslt = glob.sync(__dirname + '/**/*')
console.timeEnd('glob')
console.log(reuslt)


// 非阻塞性io
var NResult= null
console.time("nglob")
glob(__dirname + "/**/*", function(err, res) {
    NResult = res;
    console.log(NResult)
})
console.timeEnd("nglob")
console.log(1 + 1)













