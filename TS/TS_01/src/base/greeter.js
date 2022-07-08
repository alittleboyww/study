"use strict";
// function greeter(person: String) {
//     return "Hello," + person;
// }
class Student {
    constructor(firstName, mid, lastName) {
        this.firstName = firstName;
        this.mid = mid;
        this.lastName = lastName;
        this.fullName = this.firstName + " " + this.mid + " " + this.lastName;
    }
}
function greeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
// let user: Person = {firstName: "liu", lastName: "jiachen"};
let user = new Student("liu", "GB", "jiachen");
document.querySelectorAll(".app")[0].innerHTML = greeter(user);
// 数组 
// 数组相关
let arr = [1, 2, 3,];
let arr1 = [1, 2, 3, 4];
// 元组
let tuple = ["12", 2];
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Yellow"] = 2] = "Yellow";
})(Color || (Color = {}));
let color = Color.Green;
let colorName = Color[1];
