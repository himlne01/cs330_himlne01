# Storing Stuff

Implement the following List functionality using HTML, CSS, and JavaScript. Use Bootstrap for styling of the elements. The example is of the *shopping list* but you should choose your own theme.

## Design

![List Example](example.png)

Buttons *Add*, *Save*, *Remove*, and *Clear* must perform the following tasks:

* *Add*: collect values from the input fields and create a new row in the table with those values.
* *Save*: save current state of the list using *local storage*.
* *Remove*: remove checked items from the list.
* *Clear*: remove all items from the list.

## Implementation

* Use model-view-controller approach.
* Use local storage to store and retrieve data.
* Regenerate the list upon page refresh.

## Grading criteria

01. Use Model-View-Controller pattern
02. Load the list from local storage, if present
    03. Add new item to the shopping list on button click
    04. Save the list to local storage on button click
    05. Remove all **checked** items from the shopping list on button click
    06. Remove **all** items from the list on button click
x07. Validate input fields. Do not accept empty values
08. Use checkbox and an item title to mark an item as checked
x09. Consistent design using Bootstrap
x10. Code is error-free
