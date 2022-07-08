function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U> {};
    for(let id in first) {
        // 这里还有些不懂
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        // if (!result.hasOwnProperty(id)) {

        // }
        (<any>result)[id] = (<any>second)[id];
    }
    return result;
}

class Serialbe {
    constructor(public sno: number) {

    }
}

interface Loggable {
    log(): void;
}

class ConsoleLogger implements Loggable {
    log() {

    }
}



interface Bird {
    fly(): void;
    layEggs(): void;
}

interface Fish {
    layEggs(): void;
    swim(): void;
}
// 联合类型
function getSmallPet() : Fish | Bird {
    return  {
        layEggs() {},
        swim() {}
    }
}

let pet = getSmallPet();

pet.layEggs();
// 断言
if ((<Fish>pet).swim) {
    (<Fish>pet).swim();
} else {
    (<Bird>pet).fly();
}


// 用户自定义的保护类型
function isFish(pet: Fish | Bird): pet is Fish {
    return (<Fish>pet).swim !== undefined;
}

if(isFish(pet)) {
    pet.swim();
} else {
    pet.fly();
}



type Alias = {num: number};
interface Interfaced {
    num: number;
}

declare function aliased(arg: Alias): Alias;
declare function interfaced(arg: Interfaced): Interfaced;





// 字符串别名
type Easing = "ease-in" | "ease-out" | "ease-in-out";
class UIElement {
    animate (dx: number, dy: number, easing: Easing) {
        if (easing == "ease-in") {

        } else if (easing == "ease-out") {

        } else {

        }
    }
}

let button = new UIElement();
button.animate(0, 0, "ease-in");
// button.animate(0, 0, "iii");


function foo(x: number) {
    // if (x !== 1 || x !== 2){

    // }
}



interface Square {
    kind: "Square";
    size: number;
}

interface Rectangle {
    kind: "Rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "Circle";
    radius: number;
}

type ShapeMerge = Square | Rectangle | Circle;

function area(shape: ShapeMerge) {
    switch (shape.kind) {
        case "Square": console.log("Square"); break;
        case "Rectangle": console.log("Rectangle"); break;
        case "Circle": console.log("Circle"); break;
    }
}



function pluck<T, K extends keyof T>(o: T, names: K[]): T[K][] {
    return names.map(item => {
        return o[item];
    })
}

interface P {
    name: string;
    age: number;
}
let person: P = {
    name: "ljc",
    age: 12
}

let result: (string | number)[] = pluck(person, ["name", "age"])

function getProperty<T, K extends keyof T>(o: T, name: K): T[K] {
    return o[name]; // o[name] is of type T[K]
}

type Proxy<T> = {
    get(): T;
    set(value: T): void;
}

type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>
}

// function proxify<T>(o: T): Proxify<T> {
//     // ... wrap proxies ...
//     // let a: Proxify<T> = o as Proxify<T>;
//     // return a;
//  }
//let proxyProps = proxify({props: "12321"});

function unproxify<T>(t: Proxify<T>): T {
    let result = {} as T;
    for (const k in t) {
        result[k] = t[k].get();
    }
    return result;
}

//let originalProps = unproxify(proxyProps);


























































