"use strict";
// =============================== version 1
// function printLabel(labeledObj: {label : string}) {
//     console.log(labeledObj.label);
// }
// let myObj = {otherProp: '其他属性', label: "label属性"}
// let noLabel = {otherProp: '其他属性'}
// printLabel(myObj)
// =============================== version 1
function printLabel(labelObj) {
    console.log(labelObj.label);
}
let myObj = { otherProp: "其他属性", label: "label属性--接口" };
printLabel(myObj);
function getSquare(config) {
    let newSquare = { area: 100, color: "red" };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = getSquare({ color: "yellow" });
let p1 = { x: 1, y: 1 };
// p1.x = 10;
let num = [1, 2, 3, 4];
let readonlyNum = num;
// readonlyNum[0] = 1
// num = readonlyNum;
// 通过断言进行处理
num = readonlyNum;
function getFlower(flower) {
    let info = "";
    if (flower.color) {
        info += flower.color;
    }
    if (flower.name) {
        info += flower.name;
    }
    return info;
}
// 方式二是将其设置为一个对象，这样就不会经过额外类型检查
let options = { culor: "red", name: "玫瑰" };
//getFlower({culor: "red", name: "玫瑰"});
getFlower(options);
let mySearch;
mySearch = function (source, substr) {
    let result = source.search(substr);
    return result > -1;
};
// 类型推断 会根据接口定义来进行推断
mySearch = function (source, substr) {
    let result = source.search(substr);
    return result > -1;
};
let strArr;
strArr = ["fir", "sec"];
console.log(strArr[0]);
// 可做索引的类型包括两种  string 和 number   但如果某一个索引 100 或者 "100" 其对应的返回类型需要相同
class Animal {
    constructor() {
        this.name = "animal";
    }
}
class Dog extends Animal {
    constructor() {
        super(...arguments);
        this.breed = "10";
    }
}
let readonlyProp;
readonlyProp = ["1", "2"];
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
    setTime(date) {
        this.currentTime = date;
    }
}
function createClock(clock, h, m) {
    return new clock(h, m);
}
class DigitalClock {
    constructor(h, m) {
    }
    tick() {
        console.log("DigitalClock");
    }
}
class AnalogClock {
    constructor(h, m) {
    }
    tick() {
        console.log("AnalogClock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
let square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
function getCounter() {
    let counter = function (start) { };
    counter.interval = 5.0;
    counter.reset = function () { };
    return counter;
}
let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
// =============================== version 10
