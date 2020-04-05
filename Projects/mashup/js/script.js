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

async function getPoem() {
    let theTextbox = document.getElementById("poemLine");
    let theLines = theTextbox.value;
    theTextbox.value = ''; // CLEAR TEXTBOX
    let thePoemData = await getData("http://poetrydb.org/lines/" + theLines);
    let theRow = document.querySelector(".row");
    theRow.removeAttribute("p");
    let child = document.querySelector(".poemParas"); // CLEAR POEM DIV
    while (child) {
        theRow.removeChild(child);
        child = document.querySelector(".poemParas");
    }
    if (thePoemData.status == "404") { // WARNING
        let po = document.querySelector("#noPoem");
        po.setAttribute("class", "alert alert-danger");
        po.innerHTML = "We cannot find a poem with those lines";
    }
    else {
        let po = document.querySelector("#noPoem");
        po.innerHTML = ''; // CLEAR WARNING DIV
        po.removeAttribute("class");
        // Random Poem Number
        let randomNumber = Math.floor(Math.random() * (thePoemData.length + 1));
        // Title and Author
        let theTitle = thePoemData[randomNumber].title;
        let theAuthor = thePoemData[randomNumber].author;
        let firstEl = document.createElement("h3");
        firstEl.setAttribute("class", "poemParas");
        firstEl.innerHTML = theTitle + " by " + theAuthor;
        theRow.appendChild(firstEl);

        // Save title, author
        let poemList = localStorage.getItem("poem");
        poemList = poemList ? JSON.parse(poemList) : [];
        let selNames = ["title", "author"];
        let newPoem = {};
        newPoem[0] = theTitle;
        newPoem[1] = theAuthor;
        
        poemList.push(newPoem);
        localStorage.setItem("poem", JSON.stringify(poemList));

        // Lines
        for (let ls in thePoemData[randomNumber].lines) {
            let secondEl = document.createElement("p");
            secondEl.setAttribute("class", "poemParas");
            let firstText = document.createTextNode(thePoemData[randomNumber].lines[ls]);
            secondEl.appendChild(firstText);
            theRow.appendChild(secondEl);
        }

        // If it is the only poem, return picture #1, else find a new number out of 1084.

        if (randomNumber != 0) {
            randomNumber = Math.floor(Math.random() * (1085));
        } 
        // Resize
        let thePhotoData = await getData("https://picsum.photos/id/"+randomNumber+"/info");
        let dataDic = thePhotoData.download_url.split('/');
        if (dataDic[5] < dataDic[6]) {
            dataDic[5]=200;
            dataDic[6]=300;
        } else {
            dataDic[5]=300;
            dataDic[6]=200;
        }

        let s = '';
        for (let i=0; i<dataDic.length-1; i++) {
            s = s + dataDic[i] +'/';
        }
        s = s + dataDic[dataDic.length-1];

        // Yes, you build an album of pictures. You get a new poem.
        let thePicCol = document.querySelector(".pic");
        let thePicc = document.createElement('img');
        thePicc.setAttribute("src", s +".jpg");
        thePicCol.appendChild(thePicc);
        thePoemData = ''; // CLEAR POEM DATA
    }
}
