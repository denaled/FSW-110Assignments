//Declaring variables
var taskInput = document.getElementById("new-task"); //Text input
var addButton = document.getElementById("add"); //Add button
var list = document.getElementById("todo-list"); //ToDo list

//New task list item
var createTaskElement = function(taskString) {
  // creating the list item
  var listItem = document.createElement('li');
  // creating the label
  var label = document.createElement('label');
  //creating the delete button
  var deleteButton = document.createElement('button');
  // modifying elements
  label.innerText = taskString;
  deleteButton.innerText = "Delete"; 
  deleteButton.className = "delete";
  //appending the label and the deleteButton to listItem
  listItem.appendChild(label);
  listItem.appendChild(deleteButton);
  console.log(listItem)
  return listItem;  
};

//Add a new task
var addTask = function () {
  var listItem = createTaskElement(taskInput.value);
  list.appendChild(listItem);
  taskInput.focus();
  taskInput.select();
};

//Delete a task
var deleteTask = function() {
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  ul.removeChild(listItem);  
};

var bindTaskEvents = function(taskListItem) {
  //select taskListItem's children
  var deleteButton = document.querySelector("button.delete"); //Delete button
  //bind tasks to delete button
  deleteButton.onclick = deleteTask;
};

//cycling over the list ul list items
  for(var i = 0; i < list.children.length; i++) {
   //bind events to list item's children
    bindTaskEvents(list.children[i])
  //
};

//Set the click handler to the addTask function
addButton.onclick = addTask;