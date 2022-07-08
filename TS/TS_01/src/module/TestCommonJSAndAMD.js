"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const zip = require("./CommonJSAndAMD");
// Some samples to try
let strings = ["Hello", "98052", "101"];
let validator = new zip();
// Show whether each string passed each validator
strings.forEach(s => {
    console.log(`"${s}" - ${validator.isAcceptable(s) ? "matches" : "does not match"}`);
});
