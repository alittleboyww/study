"use strict";
function extend(first, second) {
    let result = {};
    for (let id in first) {
        // 这里还有些不懂
        result[id] = first[id];
    }
    for (let id in second) {
        // if (!result.hasOwnProperty(id)) {
        // }
        result[id] = second[id];
    }
    return result;
}
class Serialbe {
    constructor(sno) {
        this.sno = sno;
    }
}
class ConsoleLogger {
    log() {
    }
}
// 联合类型
function getSmallPet() {
    return {
        layEggs() { },
        swim() { }
    };
}
let pet = getSmallPet();
pet.layEggs();
// 断言
if (pet.swim) {
    pet.swim();
}
else {
    pet.fly();
}
// 用户自定义的保护类型
function isFish(pet) {
    return pet.swim !== undefined;
}
if (isFish(pet)) {
    pet.swim();
}
else {
    pet.fly();
}
class UIElement {
    animate(dx, dy, easing) {
        if (easing == "ease-in") {
        }
        else if (easing == "ease-out") {
        }
        else {
        }
    }
}
let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "iii");
function foo(x) {
    // if (x !== 1 || x !== 2){
    // }
}
function area(shape) {
    switch (shape.kind) {
        case "Square":
            console.log("Square");
            break;
        case "Rectangle":
            console.log("Rectangle");
            break;
        case "Circle":
            console.log("Circle");
            break;
    }
}
function pluck(o, names) {
    return names.map(item => {
        return o[item];
    });
}
let person = {
    name: "ljc",
    age: 12
};
let result = pluck(person, ["name", "age"]);
function getProperty(o, name) {
    return o[name]; // o[name] is of type T[K]
}
// function proxify<T>(o: T): Proxify<T> {
//     // ... wrap proxies ...
//     // let a: Proxify<T> = o as Proxify<T>;
//     // return a;
//  }
//let proxyProps = proxify({props: "12321"});
function unproxify(t) {
    let result = {};
    for (const k in t) {
        result[k] = t[k].get();
    }
    return result;
}
//let originalProps = unproxify(proxyProps);
