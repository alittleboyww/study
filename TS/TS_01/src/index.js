"use strict";
let hello = "TypeScript";
document.querySelectorAll(".app")[0].innerHTML = hello;
let obj = {
    'a': 1,
    'b': 2,
};
function getValues(obj, keys) {
    return keys.map(key => obj[key]);
}
console.log(getValues(obj, ['a', 'b']));
