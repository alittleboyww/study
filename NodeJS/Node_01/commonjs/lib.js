module.exports = function (personAction) {
    console.log(personAction);
    
    var random = Math.random() * 3;
    
    if (random < 1) {
        var computerAction = "rock"
        console.log("rock")
    } else if (random > 2) {
        var computerAction = "scissor"
        console.log("scissor")
    } else {
        var computerAction = "paper"
        console.log("paper")
    }
    
    if (computerAction === personAction) {
        console.log("平局")
        return 0
    } else if (
        (computerAction === "rock" && personAction === "scissor") ||
        (computerAction === "scissor" && personAction === "paper") ||
        (computerAction === "paper" && personAction === "rock")
    ) {
        console.log("电脑赢")
        return 1
    } else {
        console.log("玩家赢")
        return -1
    }
}