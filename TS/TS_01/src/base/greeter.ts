// function greeter(person: String) {
//     return "Hello," + person;
// }

class Student {
    fullName: String;
    constructor(public firstName: String, public mid: String, public lastName: String) {
        this.fullName = this.firstName + " " + this.mid + " " + this.lastName;
    }
}

interface Person {
    firstName: String,
    lastName: String,
}

function greeter(person: Person) {
    return "Hello " + person.firstName + " " + person.lastName; 
}
// let user: Person = {firstName: "liu", lastName: "jiachen"};

let user: Person = new Student("liu", "GB", "jiachen")

document.querySelectorAll(".app")[0].innerHTML = greeter(user);


// 数组 
// 数组相关
let arr: number[] = [1, 2, 3,];

let arr1: Array<number> = [1,2,3,4];

// 元组
let tuple: [string, number] = ["12", 2];

// 枚举
enum Color {
    Red,
    Green,
    Yellow
}

let color : Color = Color.Green;
let colorName : String = Color[1];
