/* jshint esversion: 8 */
/* jshint node: true */
/* jshint jquery: true */
/* jshint browser: true */
'use strict';

var quantities = [1,2,3,4,5,6,7,8,9,10];
var stores = [
    "Target",
    "Walmart",
    "Fareway",
    "Casey's"
];
var sections = [
    "Produce",
    "Dairy",
    "Candy & Snacks",
    "Cereal",
    "Movies, CDs, Books",
    "Home Goods",
    "Clothing",
    "Electronics",
    "Gasoline"
];
var priorities = [
    "If I Have Money",
    "Kinda Want It",
    "Need It",
    "Life or Death"
];
var team = [
	"Bored Croissant" /*Claire*/,
	"Toxic Oreo" /*Aaron*/,
	"Tired Cookie" /*Rachelle*/,
	"Overwhelmed Meatballs" /*Belle*/,
	"Sad Pancakes" /*Megan*/,
	"Disappointed Peanut Butter" /*Nell*/,
	"Enraged Bagel" /*Will*/,
	"Relaxed Chicken Noodle Hot Dish" /*Abbey*/
];

var theListModel = new List();
var theListView = new ListView(theListModel);

function populateSelectOption(selectId, optionArray) {
    let popDiv = document.querySelector(`#${selectId}`);
    let popSelect = document.createElement("select");
    popSelect.setAttribute("class", "form-control select_populated");
	popSelect.setAttribute("id", `${selectId}Box`);
	
	for (let listItem in optionArray) {
		let listOption = document.createElement("option");
		listOption.setAttribute("value", optionArray[listItem]);
		listOption.innerHTML = optionArray[listItem];
		popSelect.appendChild(listOption);
		popDiv.appendChild(popSelect);
	}
}

function addListItem() {
    let itemName = document.getElementById('itemNameBox').value; 
    let price = document.getElementById('priceBox').value;
    if (itemName == "" || price == '' || isNaN(Number(price)) ) {
		theListView.warning();
	} else {
        theListView.checkWarning();
        let quantity = document.getElementById('quantityBox').value; 
        let store = document.getElementById('storeBox').value;
        let section = document.getElementById('sectionBox').value;
        let priority = document.getElementById('priorityBox').value;
        // FROM MODEL
        let newItem = new ListItem(false, itemName, quantity, price, store, section, priority);
        theListModel.add(newItem);
    }
    itemName = '';
    price = '';
}

// add from dic of dic
function addPreviousListItem(fullListDic) {
    let loadedDic = JSON.parse(fullListDic);
    for (let item of loadedDic) { 
        let newListDic = [];   // [purchased, name, etc] format
        for (let i in item) {
            newListDic.push(item[i]);
        }
        let newItem = new ListItem(newListDic[0], newListDic[1], newListDic[2], newListDic[3], newListDic[4], newListDic[5], newListDic[6]);
        theListModel.add(newItem);
    }
}

function save() {
    let fullList = theListModel.save();
    localStorage.setItem("theList", JSON.stringify(fullList));
}

function changePurchase(rowId) {
    theListView.change();
    theListModel.change(rowId);
}

// not from storage
function removePurchased() {
    theListModel.removeChecked();
}

// not from storage
function removeAll() {
    theListModel.removeAll();
}

window.onload = function() {
    populateSelectOption("quantity", this.quantities);
    populateSelectOption("store", this.stores);
    populateSelectOption("section", sections);
    populateSelectOption("priority", priorities);
    let listDic = localStorage.getItem("theList");
    if (listDic != null) {
        theListView.writeList(listDic);
        addPreviousListItem(listDic);
    }
};