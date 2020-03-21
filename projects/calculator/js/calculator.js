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

function clearsOne() {
	clears();
	total = "";
}

function evaluated() {
	let ansRow = document.querySelector(".para");
	clears();
	ansRow = document.querySelector(".para");
	ansRow.append(eval(total));
	total = '';
}
