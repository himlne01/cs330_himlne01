/* jshint esversion: 8 */
/* jshint node: true */
/* jshint jquery: true */
/* jshint browser: true */
'use strict';

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

var priority = ["ASAP", "Important", "Casual", "Low"];

function addTask() {
	let valueTask = document.getElementById("taskBox").value;
	let valueDate = document.getElementById("dateBox").value;
	let valueAT = document.getElementById("populatedassignedTo").value;
	let valuePriority = document.getElementById("populatedpriority").value;
	let valList = [valueTask, valueAT, valuePriority, valueDate];
	//document.writeln(!valueDate);
	if (valueTask == "" || !valueDate == Boolean(true)) {
		let extra = document.querySelector(".space");
		let warning = document.createElement("div");
		warning.setAttribute("class", "alert alert-warning");
		warning.innerHTML = "Please enter a Task and Due Date";
		extra.appendChild(warning);
	} else {
	let extra = document.querySelector(".space");
	extra.removeChild();
	let dadBod = document.querySelector("tbody");
	addRow(valList, dadBod);
    }
}

function addRow(valueList, parent) {
	let taskRow = document.createElement("tr");
	taskRow.setAttribute("class", valueList[2]);
	//taskRow.setAttribute("class",`${document.getElementById("populatedpriority").value}`);
	let doneBox = document.createElement("input");
	doneBox.setAttribute("type", "checkbox");
	doneBox.setAttribute("class", "form-check");
	let doneData = document.createElement("td");
	doneData.appendChild(doneBox);
	taskRow.appendChild(doneData);

	for (let i in valueList) {
		let taskData = document.createElement("td");
		taskData.innerHTML = valueList[i];
		taskRow.appendChild(taskData);
	}
	/*let taskData = document.createElement("td");
	let assignedToData = document.createElement("td");
	let priorityData = document.createElement("td");
	let dateData = document.createElement("td");
	taskData.innerHTML = document.getElementById("taskBox").value;
	assignedToData.innerHTML = document.getElementById(
		"populatedassignedTo"
	).value;
	priorityData.innerHTML = document.getElementById("populatedpriority").value;
	dateData.innerHTML = document.getElementById("dateBox").value;
	
	taskRow.appendChild(taskData);
	taskRow.appendChild(assignedToData);
	taskRow.appendChild(priorityData);
	taskRow.appendChild(dateData);*/
	parent.appendChild(taskRow);
}

function removeRow() {
	// https://stackoverflow.com/questions/26512386/remove-current-row-tr-when-checkbox-is-checked
}

function populateSelect(selectId, sList) {
	let popDiv = document.querySelector(`.${selectId}`);
	let popSelect = document.createElement("select");
	popSelect.setAttribute("class", "form-control select_populated");
	popSelect.setAttribute("id", `populated${selectId}`);
	for (let listItem in sList) {
		let listOption = document.createElement("option");
		listOption.setAttribute("value", sList[listItem]);
		listOption.innerHTML = sList[listItem];
		popSelect.appendChild(listOption);
		popDiv.appendChild(popSelect);
	}
}

window.onload = function() {
	populateSelect("assignedTo", team); //name of dic
	populateSelect("priority", priority);
};
