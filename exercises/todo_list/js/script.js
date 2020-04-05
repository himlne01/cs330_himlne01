/* jshint esversion: 8 */
/* jshint node: true */
/* jshint jquery: true */
/* jshint browser: true */
'use strict';

var team = [
	'Nell', 
	'Aaron',
	'Karl',
	'Belle',
	'Evan',
	'Michael & Chloe',
	'Megan',
	'Claire',
	'Will',
	'Abbey'
];

var priority = ["ASAP", "Important", "Casual", "Low"];

function addTask() {
	let valueTask = document.getElementById("taskBox").value;
	document.getElementById("taskBox").value = '';
	let valueDate = document.getElementById("dateBox").value;
	let valueAT = document.getElementById("populatedassignedTo").value;
	let valuePriority = document.getElementById("populatedpriority").value;
	let valList = [valueTask, valueAT, valuePriority, valueDate];
	
	if (valueTask == "" || !valueDate == Boolean(true)) {
		let extra = document.querySelector(".space");
		let warning = document.createElement("p");
		warning.setAttribute("class", "alert alert-warning");
		warning.setAttribute('id', 'warnings');
		warning.innerHTML = "Please enter a Task and Due Date";
		extra.appendChild(warning);
	} else {
	let extra = document.querySelector(".space");
	if (extra.hasChildNodes() == true) {
		let kids = document.getElementById("warnings");
		kids.remove();
	}
	let dadBod = document.querySelector("tbody");
	addRow(valList, dadBod);
	valueTask = '';
    }
}

function addRow(valueList, parent) {
	// REMINDER valueList = [valueTask, valueAT, valuePriority, valueDate]
	let taskRow = document.createElement("tr");
	taskRow.setAttribute("class", valueList[2]);
	taskRow.setAttribute("id", valueList[0]);
	let doneBox = document.createElement("input");
	doneBox.setAttribute("type", "checkbox");
	doneBox.setAttribute("class", "form-check");
	doneBox.setAttribute("onclick", `removeRow(${ valueList[0] })`);
	let doneData = document.createElement("td");
	doneData.appendChild(doneBox);
	taskRow.appendChild(doneData);

	for (let i in valueList) {
		let taskData = document.createElement("td");
		taskData.innerHTML = valueList[i];
		taskRow.appendChild(taskData);
	}
	
	parent.appendChild(taskRow);
}

function removeRow(rowId) {
	rowId.remove();
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
