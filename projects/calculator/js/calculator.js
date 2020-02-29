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
        return 0;
    }
    
    onStack(thing) {
        this._stack.push(thing);
    }
    
    onStackAdd() {
        this._stack.push("+");
    }
    
    onStackSubtract() {
        this._stack.push("-");
    }
    
    onStackMultiply() {
        this._stack.push("*");
    }
    
    onStackDivide() {
        this._stack.push("/");
    }
    
    onStackDec() {
        this._stack.push(".");
    }
    
    evaluate() {
        for (var n in this._stack){
            if (typeof(n) === "number") {
                
            }
        }
    
    }
}

