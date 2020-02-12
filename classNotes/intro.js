/* jshint esversion: 8 */
/* jshint node: true */
'use strict';

/* alt + up, down */
/* control + / */

// console.log("Ni hao");
// console.log("Ni hao yi bian");
// console.log("Ni hao " + "shui ge #" + 3);

// var x = 5;      /* */
// const v = [1, 2, 'hello'];    /* */
// let w = 7;      /* limit scope, not hosted */

// console.log(x);
// console.log(v);

// v.push(4);      /* add new element */
// console.log(v);

// v.pop();      /* remove new element */
// console.log(v);

// /* tuple: [immutable], list (mutable), set {no duplicates}, {dictionaries: "the best"}*/

// for (let i in v) {  /* iterate over indices */
//     console.log(i);
// }

// for (let i in v) {  /* iterate over indices */
//     console.log(v[i]);
// }

// for (let i of v) {  /* iterate over actual objects */
//     console.log(i);
// }

// let lol = 4;
// console.log(lol == '4');
// console.log(lol === '4');

// console.log('' == null);    /* false */
// console.log('' == NaN);     /* false */
// console.log(null == NaN);   /* false */
// console.log(null == undefined);     /* true */

// let foo = 7;

// if (foo > 0) {
//     console.log('positive');
// } else if (foo < 0) {
//     console.log('negative');
// } else {
//     console.log('zero');
// }

let turkey = 11;

switch (turkey) {
    case 1:
        console.log('January');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
}

let a = 10;

while (a > 0) {
    console.log(a);
    a--;
}

function hello(name) {
//    console.log("hello, " + name);
    console.log(`Hello, ${name}`);
}

hello("cs330");

let dz = {"Alice": 5, "Bob" : 56};
console.log(dz["Alice"]);
console.log(dz.Bob);

// fxn calculation exercise!
// git pull upstream master
// git 
// git push -u origin master (once)
// git push (after)

// git remote -v (see what is connected) 
