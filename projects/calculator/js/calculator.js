/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
"use strict";

let str = "";
let total = "";

function onStack(given) {
	if (total == '') {
		clears();
	}
	total = total + given;
	let ansBox = document.querySelector(".para");
	ansBox.append(given);
}

function clears() {
	let ansRow = document.querySelector("#theans");
	let ansBox = document.querySelector(".para");
	ansRow.removeChild(ansBox);
	let p = document.createElement("p");
	let textnode = document.createTextNode(' ');
	p.appendChild(textnode);
	p.classList = "para";
	ansRow.appendChild(p);
}

<<<<<<< HEAD
    clearCalculator() {
        for (var things in this._stack) {
            this._stack.pop();
        }
        this._stack.push(0);
        this._stack.get();
    }
    
    onStack(thing) {
        this._stack.push(thing);
    }
    
    onStackAdd() {
    	this.evaluate();
        this._stack.push("+");
    }
    
    onStackSubtract() {
    	this.evaluate();
        this._stack.push("-");
        
    }
    
    onStackMultiply() {
        this.evaluate();
        this._stack.push("*");
    }
    
    onStackDivide() {
    	this.evaluate();
        this._stack.push("/");
    }
    
    onStackDec() {
        this._stack.push(".");
    }
    
    evaluate() {
    	let numberOne="";
    	let numberTwo="";
        let opFocus="";
        
        //Hopefully, disregard the change in signs. Don't make mistakes.

        for (var n in this._stack){
        	n = this._stack.pop();
            if (typeof(n) === "number") {
                numberOne=n+numberOne;
            } else if (typeof(n) !== "number"){
				opFocus = n;
				numberTwo = numberOne;
				numberOne = "";
				
            }
        console.log(numberOne, opFocus, numberTwo);
        }
    
    }
=======
function clearsOne() {
	clears();
	total = "";
>>>>>>> ef49e6f0366536cf8359971adbc3e4c8916d1e03
}

function evaluated() {
	let ansRow = document.querySelector(".para");
	clears();
	ansRow = document.querySelector(".para");
	ansRow.append(eval(total));
	total = '';
}
