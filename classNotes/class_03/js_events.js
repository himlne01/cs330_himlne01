/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
'use strict';

console.log("This is Model Nell");
// document.writeln("Hello from canvas");

function addParagraph() {
    let c = document.querySelector("#content"); 
    let p = document.createElement("p") ;
    p.classList = "para";
    p.setAttribute("id", "third");
    p.innerHTML = "This is a new paragraph";
    c.append(p);
}

function doSomething() {
    let all_p = document.querySelectorAll(".para");
    for (let p of all_p) {
        p.setAttribute("style", "color:red");
    }
}

function doSomething(new_color) {
    let the_color = new_color || 'green';
    let all_p = document.querySelectorAll(".para");
    for (let p of all_p) {
        p.setAttribute("style", `color:${the_color}`);
    }
}

function greetByName(new_color) {
    //const queryString = location.search; //window.location.search
    //const urlParams = new URLSearchParams(window.location.search);
    // const URLSearchParams = window.URLSearchParams;
    const urlSearchParams = window.location.search; // HOW DO I USE THIS TO GET COLOR, NAME?
    // let params = new URLSearchParams(window.location.search);
    let color = urlSearchParams.get('color');    // document.querySelector('color');
    let name = urlSearchParams.get('name') || 'Student';     // document.querySelector('name');
    let greet = urlSearchParams.get('h1');    // document.querySelector("h1");
    greet.innerHTML = `Hello ${name}!`;
    doSomething(color);
}

// compare if it is prime (divisible by 1 and itself), generate list of primes, print list!!!!
// for every i in a list sqrt(n), divisible by self, delete other numbers divisible by that number.
// isPrime(n)
// (return n % 2 == 0)
// return boolean
// getNPrimes(n): get numbers from 
// return array of prime numbers
// printNPrimes(nPrimes)
// x to canvas  WORK ON IT TUESDAY TOO, DUE THURSDAY??


window.onload = function() {
    addParagraph();
    this.greetByName();
};

//20-02-18
// t = doc.query()??
// while numblength < 330:
    //