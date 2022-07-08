// =============================== version 1
// function printLabel(labeledObj: {label : string}) {
//     console.log(labeledObj.label);
// }
// let myObj = {otherProp: '其他属性', label: "label属性"}
// let noLabel = {otherProp: '其他属性'}
// printLabel(myObj)
// =============================== version 1

// =============================== version 2
interface LabeldValue {
    label: string;
}

function printLabel(labelObj: LabeldValue) {
    console.log(labelObj.label);
}

let myObj = { otherProp: "其他属性", label: "label属性--接口"}

printLabel(myObj)

// =============================== version 2


// =============================== version 3 可选属性
interface SquareConfig {
    width?: number;
    color?: string;
}

function getSquare(config: SquareConfig): {area: number, color: string} {
    let newSquare = { area: 100, color: "red" };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}

let mySquare = getSquare({color: "yellow"})
// =============================== version 3

// =============================== version 4 只读属性

interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {x: 1, y: 1}

// p1.x = 10;

let num: number[] = [1, 2, 3, 4];

let readonlyNum: ReadonlyArray<number> = num;

// readonlyNum[0] = 1

// num = readonlyNum;
// 通过断言进行处理
num = readonlyNum as number[];
// =============================== version 4

// =============================== version 5 可选属性

interface Flower {
    color?: string;
    name?: string;
    // 方式 1 是添加可选属性
    //[propName: string]: any;
}

function getFlower(flower: Flower) {
    let info: string = "";
    if (flower.color) {
        info += flower.color;
    }
    if (flower.name) {
        info += flower.name;
    }
    return info;
}
// 方式二是将其设置为一个对象，这样就不会经过额外类型检查
let options = {culor: "red", name: "玫瑰"};
//getFlower({culor: "red", name: "玫瑰"});

getFlower(options)

// =============================== version 5

// =============================== version 6 函数类型
// 函数类型
interface MySearch {
    (source: string, substr: string): boolean;
}

let mySearch: MySearch;
mySearch = function(source: string, substr: string): boolean {
    let result = source.search(substr);
    return result > -1;
}
// 类型推断 会根据接口定义来进行推断
mySearch = function(source, substr) {
    let result = source.search(substr);
    return result > -1;
}

// =============================== version 6


// =============================== version 7 可索引的类型

interface StringArray {
    [index: number]: string; 
}
let strArr: StringArray;

strArr = ["fir", "sec"]
console.log(strArr[0])

// 可做索引的类型包括两种  string 和 number   但如果某一个索引 100 或者 "100" 其对应的返回类型需要相同
class Animal {
    name: string = "animal";
}

class Dog extends Animal {
    breed: string = "10";
}
// 需要包含关系 下面定义可以通过
interface Ok {
    [x: number]: Dog;
    [x: string]: Animal;
}

// 下面定义不可以通过  即string索引对应的返回类型 需要包含 number索引定义的返回类型
// interface NotOk {
//     [x: number]: Animal;
//     [x: string]: Dog;
// }

// 需要保证接口中 其他非索引类型的属性和索引类型的返回类型一致
interface NumberDictionary {
    [x: string]: number;
    length: number;
    // 编译出错  下面这段 存在问题 其与索引类型的返回类型不同
    // name: string;
}

// 给索引类型设置只读属性
interface ReadonlyProp {
    readonly [propName: number]: string;
}
let readonlyProp: ReadonlyProp;
readonlyProp = ["1", "2"];
// readonlyProp[0] = "123";

// =============================== version 7

// =============================== version 8 类类型
interface ClockInterface {
    currentTime: Date;
    // 接口中描述方法 类中实现
    setTime(date: Date): void;
}
class Clock implements ClockInterface {
    currentTime: Date;
    setTime(date: Date) {
        this.currentTime = date;
    }
    constructor(h: number, m: number) {
        this.currentTime = new Date();
    }
}

// 类静态部分与实例部分区别  接口描述
interface ClockConstructor {
    new(h: number, m: number): ClockInterfaceTwo;
}

interface ClockInterfaceTwo {
    tick() : any;
}

function createClock(clock: ClockConstructor, h: number, m: number) : ClockInterfaceTwo {
    return new clock(h, m);
}

class DigitalClock implements ClockInterfaceTwo {
    constructor(h: number, m: number){

    }
    tick() {
        console.log("DigitalClock")
    }
}

class AnalogClock implements ClockInterfaceTwo {
    constructor(h: number, m: number){

    }
    tick() {
        console.log("AnalogClock")
    }
}

let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);

// =============================== version 8


// =============================== version 9 接口继承

interface Shape {
    color: string;
}

interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

// =============================== version 9

// =============================== version 10 混合类型
interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter() : Counter {
    let counter = <Counter> function(start: number) { }
    counter.interval = 5.0;
    counter.reset = function() {}
    return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;
// =============================== version 10

