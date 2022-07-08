
interview(function (err, res) {
    if (err) {
        console.log(err)
        return err;
    }
    console.log(res)
})


function interview(callback) {
    setTimeout(() => {
        if (Math.random() < 0.1) {
            callback(null, "success")
        } else {
            callback(new Error())
        }
    }, 500);
}