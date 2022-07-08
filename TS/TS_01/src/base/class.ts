

// 类型推断
let test = [1, 3, null]

// ================================ 类型兼容性
interface Named {
    name: string;
}
class Person{
    name: string = '1';
}
// 这种编译是可以通过的
let p: Named;
p = new Person();

// x要兼容y，则y至少要具有x相同的属性
let x : Named;
let y = {name: "hhh", location: "嘻嘻"}
x = y;

//= 比较两个函数
let func1 = function(name: string) {};
let func2 = function(name: string, location: string) {};

// 可以将对应参数少的赋值给对应参数多的
func2 = func1;
// func2 的第二个参数 在func1中无法找到，所以无法赋值
// func1 = func2;

//= 处理返回类型值
let func3 = () => ({name: "123321"})
let func4 = () => ({name: "12321", localtion: "func4"})

// 返回类型值多包含返回类型值少的函数
func3 = func4
// 类型 "{ name: string; }" 中缺少属性 "localtion"
// func4 = func3;



function invokeLater(args: any[], callback: (...args: any[]) => void) {

}

invokeLater([1,2], (x, y) => {
    console.log(x + "," + y);
})
invokeLater([1, 2], (x?, y?) => {
    console.log(x + "," + "y")
})


class AnimalClass {
    //private len: number = 1;
    feet: number = 1;
    constructor(name: string, numFeet: number) {};
}

class Sized {
    //private len: number = 1;
    feet: number = 1;
    constructor(numFeet: number) {}
}

let ac: AnimalClass = new AnimalClass("1", 2);
let s: Sized = new Sized(1);

ac = s;
s = ac;





















