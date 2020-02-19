/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
"use strict";

function isPrime(n) {
    
    for(let index = 2; index < n; index++) {

        if (n % index == 0) {
            return Boolean(false);
        }
        
    }
    return Boolean(true);
        
}

function getNPrimes(n) {
    var i = 0;
    var start = 2;
    var primeList = [];
    while (primeList.length < n) {
        if (isPrime(start) == Boolean(true)) {
            primeList[i]=(start);
            start += 1;
            i += 1;
        } else {
            start += 1;
        }
    } 
    return primeList;

    /*else {
        console.log("Insert number");
    }*/
    
}

function printNPrimes(n) {
    console.log(getNPrimes(n));
}

function greetByName() {

    const urlSearchParams = window.location.search; // HOW DO I USE THIS TO GET COLOR, NAME?
    // let params = new URLSearchParams(window.location.search);
    let name = urlSearchParams.get('name') || 'Student';    // document.querySelector('color');
    let number = urlSearchParams.get('number');     // document.querySelector('name');
    let greet = document.querySelector('h1');    // document.querySelector("h1");
    greet.innerHTML = `Hello ${name}`;
    
    testPrime(number);
    printNPrimes(number);

}

function testPrime(new_number) {
    
    let the_number = new_number || 330;
    let declare = document.querySelectorAll(".declare");
    if (isPrime(the_number) == Boolean(true)) {
        declare.innerHTML = `${the_number} is a prime number`;
    } else {
        declare.innerHTML = `${the_number} is not a prime number`;
    }

    /*let all_p = document.querySelectorAll(".para");
    for (let p of all_p) {
        p.setAttribute("style", `color:${the_color}`);
    }*/
    
}

window.onload = function() {
    
    this.greetByName();

};