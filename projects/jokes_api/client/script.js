/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
/* jshint jquery: true */
'use strict';

const BASE_URL = "http://localhost:5000/api/v1/jokes";
const BASIC_URL = "http://localhost:5000/api/v1";

async function getData(url) {
	return fetch(url)
		.then(response => response.json())
		.catch(error => console.log(error));
}

async function getNumber() {
    let num = document.querySelector("#numBox").value;
    let theNumberData = await getData(`${BASE_URL}/${num}`);
    let info = (JSON.stringify(theNumberData).split('{"random_joke":')[1]).split("}")[0]; 
    // let info = (JSON.stringify(theNumberData).split(":")[1]).split("}")[0]; 
    printData(info);
}

function theNumber() {
    let num = document.querySelector("#numBox").value;
    console.log(num);
    // if (num == null) {
    //     requestRandom();
    // } else {
    //     
    // }
    requestData(num);
}

// I don't know how to deal with [object Promise]. I tried to set it up like Faker with
// the function on lines 28-31. I tried reading the promise webpage with resolutionFunc.
async function requestData(theNumb) { 
    return fetch(`${BASE_URL}/${theNumb}`)
    .then(response => 
    //     Promise.resolve({
    //         data: response.json(),
    //         status: response.status
    //     }))
    // .then(json => printData(json.data));
        printData(response.json() ))
    // .then(json => printData(json[theNumb]))      // <= How does this work?
    .catch(error => console.log(error));
}

async function requestRandom(labels) { 
    let theNumberData = await getData(`${BASIC_URL}/${labels}`);
    let info = (JSON.stringify(theNumberData).split('{"random_joke":')[1]).split("}")[0]; 
    printData(info);
}

function printData(data) {
    let responseDiv = document.querySelector("#response");
    responseDiv.innerHTML = data;
}