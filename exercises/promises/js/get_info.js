/* jshint esversion: 8 */
/* jshint node: true */
/* jshint jquery: true */
/* jshint browser: true */
'use strict';

async function getData(url) {
	return fetch(url)
		.then(response => response.json())
		.catch(error => console.log(error));
}

function isNumber(evt) {
    var charCode = evt.which ? evt.which : evt.keyCode;
    return !(charCode > 31 && (charCode < 48 || charCode > 57));
}

async function gets() {
    let theTextbox = document.getElementById("fnumber");
    let theNumber = Number(theTextbox.value);
    document.querySelector(".row").value = "";
    if (theNumber != "") {
        let inf = document.querySelector("#all");
        if (inf.checked) { // GET ALL AT ONCE
            createTrivia(theNumber - 1);
            createTrivia(theNumber);
            createTrivia(theNumber + 1);
        } else { // GET SEPARATE
            alls(theNumber);
        }
        document.getElementById("fnumber").value = "";
    }
}


async function alls(aNumber) {
    let theRow = document.querySelector(".row");
    for (let x = aNumber - 1; x < aNumber+2; x++) {
        let theNumberData = await getData("http://numbersapi.com/" + x + "?json");
        let firstEl = document.createElement("p");
        firstEl.setAttribute("class", "alert alert-info");
        let firstText = document.createTextNode(theNumberData.text); 
        firstEl.appendChild(firstText);
        theRow.appendChild(firstEl);
    } 
}

async function createTrivia(aNumber) {
    let theNumberData = await getData("http://numbersapi.com/" + aNumber + "?json");
    let theRow = document.querySelector(".row");
    let firstEl = document.createElement("p");
    firstEl.setAttribute("class", "alert alert-info");
    let firstText = document.createTextNode(theNumberData.text); 
    firstEl.appendChild(firstText);
    theRow.appendChild(firstEl);
}


