/* jshint esversion: 8 */
/* jshint node: true */
/* jshint browser: true */
'use strict';

var allCourses = {
    "Fundamentals of Web Programming": [130, 2],
    "Data Modeling and Querying": [140, 2],
    "Introduction to Computer Science": [150, 4],
    "Algorithms and Data Structures":[160,4],
    "Object-Oriented Programming With Java":[252,4],
    "Object-Oriented Programming With C++":[253,2],
    "Computational Models":[260,4],
    "Writing in the Major Lab":[296,1],
    "Internet Programming":[330,4],
    "Embedded Android Programming":[352,4],
    "Embedded iOS Programming":[353,4],
    "Advanced Algorithms and Data Structures":[360,4],
    "Programming Languages":[370,4],
    "Understanding Entrepreneurship in Silicon Valley":[385,4],
    "The Digital Transformation of Central Europe":[386,4],
    "Computer Networks":[430,4],
    "Database Management Systems":[440,4],
    "Operating Systems and Architecture":[450,4],
    "Information Assurance and Security":[460,4],
    "Senior Project":[490,2],
    "Senior Project Second Semester":[491,2],
    "Accelerated Senior Project":[492,4],
};

var allGrades = {
    "A": 4.0,
    "B": 3.0,
    "C": 2.0,
    "D": 1.0,
    "F": 0
};

function populateTitleOption(titleSelect) {
    for (const course in allCourses) {
        let titleOption = document.createElement("option");
        titleOption.setAttribute("value", allCourses[course][0]);
        titleOption.innerHTML = course;
        titleSelect.appendChild(titleOption); //selector: a must have for a drop down menu
    }
}

function populateGradeOption(gradeSelect) {
    for (const grade in allGrades) {
        let gradeOption = document.createElement("option");
        gradeOption.setAttribute("value", allGrades[grade][0]);
        gradeOption.innerHTML = grade;
        gradeOption.appendChild(gradeOption);
    }
}

function calculateGPA() {
    let alert_box = document.querySelector("#thegpa");
    alert_box.innerHTML = "You clicked the button!";
}

function addGrade() {
    let allMyCourses = document.querySelector("#grades");
    let currentCourse = document.querySelectorAll("#grades > [class='row']").length + 1;
    let thisCourseDiv = document.createElement("div");
    thisCourseDiv.setAttribute("class", "row");

    let titleDiv = document.createElement("div");
    titleDiv.setAttribute("class", "form-group-col");

    let titleSelect = document.createElement("select");
    titleSelect.setAttribute("class", "form-control-select_title");
    titleSelect.setAttribute("id", `title${currentCourse}`);

    let creditsDiv = document.createElement("div");
    creditsDiv.setAttribute("class", "form-group col-3");

    let creditsInput = document.createElement("input");
    creditsInput.setAttribute("type", "number");
    creditsInput.setAttribute("min", 0); //input attach to div

    creditsDiv.appendChild(creditsInput);

    populateTitleOption(titleSelect);
    titleDiv.appendChild(titleSelect);
    thisCourseDiv.appendChild(titleDiv);
    allMyCourses.appendChild(thisCourseDiv);
}

//look on the git and katie