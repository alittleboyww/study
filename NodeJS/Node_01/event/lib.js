const { EventEmitter } = require("stream");

class GeekTime extends EventEmitter {
    constructor() {
        super()
        setInterval(() => {
            this.emit("newlesson", { price: Math.random() * 100});
        }, 3000)
    }
}

const geekTime = new GeekTime();

module.exports = geekTime;