"use strict";
// 类型推断
let test = [1, 3, null];
class Person {
    constructor() {
        this.name = '1';
    }
}
// 这种编译是可以通过的
let p;
p = new Person();
// x要兼容y，则y至少要具有x相同的属性
let x;
let y = { name: "hhh", location: "嘻嘻" };
x = y;
//= 比较两个函数
let func1 = function (name) { };
let func2 = function (name, location) { };
// 可以将对应参数少的赋值给对应参数多的
func2 = func1;
// func2 的第二个参数 在func1中无法找到，所以无法赋值
// func1 = func2;
//= 处理返回类型值
let func3 = () => ({ name: "123321" });
let func4 = () => ({ name: "12321", localtion: "func4" });
// 返回类型值多包含返回类型值少的函数
func3 = func4;
// 类型 "{ name: string; }" 中缺少属性 "localtion"
// func4 = func3;
function invokeLater(args, callback) {
}
invokeLater([1, 2], (x, y) => {
    console.log(x + "," + y);
});
invokeLater([1, 2], (x, y) => {
    console.log(x + "," + "y");
});
class AnimalClass {
    constructor(name, numFeet) {
        //private len: number = 1;
        this.feet = 1;
    }
    ;
}
class Sized {
    constructor(numFeet) {
        //private len: number = 1;
        this.feet = 1;
    }
}
let ac = new AnimalClass("1", 2);
let s = new Sized(1);
ac = s;
s = ac;
