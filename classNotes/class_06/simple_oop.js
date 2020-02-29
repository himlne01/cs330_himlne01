/* jshint esversion: 8 */
/* jshint node: true */ 
'use strict';

class ComputerMouse {
    constructor(nButtons, connectionType, color) {
        this._Buttons = nButtons;
        this._connectionType = connectionType;
        this._color = color;
    }

    get buttons() {
        return this._Buttons;
    }

    get connection() {
        return this._connectionType;
    }

    set connection(newValue) {
        this._connectionType = newValue;
    }

    get color() {
        return this._color;
    }

    set color(newColor) {
        this._color = newColor;
    }

    paint(newColor) {
        this._color = newColor;
    }

    toString() {
        return `A ${this._color} ${this._connectionType} mouse with ${this._Buttons}`;
    }
}

class Lab {
    constructor(theSize) {
        this._size = theSize;
        this._lab = [];
    }

    add(mouse) {
        if (this._lab.length < this._size) {
            this._lab.push(mouse);
        }
    }

    remove(mouse) {
        //this._lab[mouse];
        //remove by clicking row, use checkbox and button, use checkbox only, 
        //use checkbox with timeout
    }
    
    [Symbol.iterator]() {
        let idx = -1;
        return {
            next: () => ({value: this._lab[++idx], done: !(idx in this._lab)})
        };
    }
}

let m = new ComputerMouse(3, "wired", "black");
m._connectionType = "wireless";
m.paint("green");

let m2 = new ComputerMouse(2, "wired", "black");

let olin202 = new Lab(2);
olin202.add(m);
olin202.add(m2);
console.log(olin202);
// console.log(m.toString());

for (let mice of olin202) {    //Olin202 is not iterable, it's an instance of a class.
    console.log(mice.toString());
}

console.log("Empty Lab");
let olin212 = new Lab(0);
for (let mice in olin212) {
    console.log(mice.toString());
}
