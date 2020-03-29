/* jshint esversion: 8 */
/* jshint node: true */
/* jshint jquery: true */
/* jshint browser: true */
'use strict';
import { TextAnalyticsClient, TextAnalyticsApiKeyCredential } from "@azure/ai-text-analytics";
/*"javascript.validate.enable": false*/
// import * as  { TextAnalyticsClient, TextAnalyticsApiKeyCredential } from `es6-@azure/ai-text-analytics`;

//require = require("@std/esm")(module,{"esm":"js"});



const key = '6aac1e30b99b4034abd92a7fcf4a18e5';
const endpoint = `https://one-interpretation.cognitiveservices.azure.com/`;

const textAnalyticsClient = new TextAnalyticsClient(endpoint,  new TextAnalyticsApiKeyCredential(key));

async function getData(url) {
	return fetch(url)
		.then(response => response.json())
		.catch(error => console.log(error));
}

async function sentimentAnalysis(lines, client){

    const sentimentInput = [
        interp(lines)
        // "Two roads diverged in a yellow wood and sorry i could not travel both and be one traveller long i stood and looked down one as far as i could to where it bent in the undergrowth. then took the other, just as fair, and having perhaps the better claim. because it was grassy and wanted wear but as for that the passing there had really worn them about the same."
    ];
    const sentimentResult = await client.analyzeSentiment(sentimentInput);

    sentimentResult.forEach(document => {
        console.log(`ID: ${document.id}`);
        console.log(`\tDocument Sentiment: ${document.sentiment}`);
        console.log(`\tDocument Scores:`);
        console.log(`\t\tPositive: ${document.confidenceScores.positive.toFixed(2)} \tNegative: ${document.confidenceScores.negative.toFixed(2)} \tNeutral: ${document.confidenceScores.neutral.toFixed(2)}`);
        // console.log(`\tSentences Sentiment(${document.sentences.length}):`);
        // document.sentences.forEach(sentence => {
        //     console.log(`\t\tSentence sentiment: ${sentence.sentiment}`)
        //     console.log(`\t\tSentences Scores:`);
        //     console.log(`\t\tPositive: ${sentence.confidenceScores.positive.toFixed(2)} \tNegative: ${sentence.confidenceScores.negative.toFixed(2)} \tNeutral: ${sentence.confidenceScores.neutral.toFixed(2)}`);
        // });
    });
}

function interp(lines) {
    let hugePara = '';
    for (let ls in lines) {
        hugePara += (lines[ls] + '');
    }
    return hugePara;
    // console.log(hugePara);
}

async function getPoem() {
    let theTextbox = document.getElementById("poemLine");
    let theLines = theTextbox.value;
    theTextbox.value = '';      // CLEAR TEXTBOX

    let thePoemData = await getData("http://poetrydb.org/lines/" + theLines);
    let theRow = document.querySelector(".row");
    theRow.removeAttribute("p");

    let child = document.querySelector(".poemParas");   // CLEAR POEM DIV
        while (child) { 
            theRow.removeChild(child); 
            child = document.querySelector(".poemParas"); 
        } 

    if (thePoemData.status == "404") {      // WARNING
        let po = document.querySelector("#noPoem");
        po.setAttribute("class", "alert alert-danger");
        po.innerHTML = "We cannot find a poem with those lines";
    } else {
        let po = document.querySelector("#noPoem");
        po.innerHTML = '';  // CLEAR WARNING DIV
        po.removeAttribute("class");
        
        // Random Poem Number
        let randomNumber = Math.floor(Math.random() * (thePoemData.length + 1));

        // Title and Author
        let theTitle = thePoemData[randomNumber].title;
        let theAuthor = thePoemData[randomNumber].author;
        let firstEl = document.createElement("h3");
        firstEl.setAttribute("class", "poemParas");
        firstEl.innerHTML = theTitle + " by "+ theAuthor;
        theRow.appendChild(firstEl);

        // Lines
        for (let ls in thePoemData[randomNumber].lines){
            let secondEl = document.createElement("p");
            secondEl.setAttribute("class", "poemParas");
            let firstText = document.createTextNode(thePoemData[randomNumber].lines[ls]); 
            secondEl.appendChild(firstText);
            theRow.appendChild(secondEl);
        }

        // Get the Sentiment Analysis Interpretation
        sentimentAnalysis(thePoemData[randomNumber].lines, textAnalyticsClient);

        thePoemData = '';   // CLEAR POEM DATA
    }
}
