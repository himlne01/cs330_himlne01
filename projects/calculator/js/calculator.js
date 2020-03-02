/* jshint esversion: 6 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

class theCalcStack {
    constructor(stack) {
        this._stack = stack;
    }

    get stack() {
        return this._stack;
    }

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
    	evaluate();
        this._stack.push("+");
    }
    
    onStackSubtract() {
    	evaluate();
        this._stack.push("-");
        
    }
    
    onStackMultiply() {
        evaluate();
        this._stack.push("*");
    }
    
    onStackDivide() {
    	evaluate();
        this._stack.push("/");
    }
    
    onStackDec() {
    	evaluate();
        this._stack.push(".");
    }
    
    evaluate() {
    	let numberOne="";
    	let numberTwo="";
    	let opFocus="";
        for (var n in this._stack){
        	n = this._stack.pop();
            if (typeof(n) === "number") {
                numberOne.concat(n);
            } else if (typeof(n) !== "number"){
				opFocus = n
				numberTwo = numberOne;
				numberOne = ""
				
            }
        return numberOne opFocus numberTwo;
        }
    
    }
}

