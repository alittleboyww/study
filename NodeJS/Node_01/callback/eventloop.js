const eventLoop = {
    queue: [],
    loop() {
        while(this.queue.length) {
            var callback = this.queue.shift()
            callback()
        }
        setTimeout(this.loop.bind(this), 50)
        // setTimeout(this.loop.bind(this), 50);
    },
    add(callback) {
        this.queue.push(callback)
    }
}

eventLoop.loop()

setTimeout(() => {
    eventLoop.add(() => {
        console.log(1)
    })
}, 500)

setTimeout(() => {
    eventLoop.add(() => {
        console.log(2)
    })
}, 800)



