/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

let thisstack = [1, 2, "+", 3, 4];

let numberOne="";
let numberTwo="";
let opFocus="";

var n = thisstack.length;
console.log(n);
//Hopefully, disregard the change in signs. Don't make mistakes.

for (thisstack.length){
    var x = thisstack.pop();
    console.log(x);
    console.log(thisstack);
    // if (typeof(n) === "number") {
    //     numberOne=n+numberOne;
    // } else if (typeof(n) != "number"){
    //     opFocus = n;
    //     numberTwo = parseInt(numberOne);
    //     numberOne = "";
        
    // }
//console.log( numberOne, opFocus, numberTwo);
}

//thisstack.evaluate();