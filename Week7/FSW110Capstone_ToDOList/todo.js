/********FSW110 Week 7 Capstone Project To DO List */
const form = document.mainForm
//const options =[]; // add element to dom
const liElements =[]
const myWrapper = document.getElementById("myListWithButtons")
const listUL = document.getElementById("theList");
let test = document.getElementById("test") // my test H1 on the DOM
const who = document.getElementById("byWho");

// event listner for Submit
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let inputValue = document.getElementById("add1").value
    let whoValue  = document.getElementById("byWho").value
    if (inputValue === "" ){
        alert("Need to at least input a task")
    }else{
        addListToDOM(inputValue)
    }
    
    document.getElementById("add1").value = "" ;//reset the input so they can add again\
    document.getElementById("byWho").value=""
})

function addListToDOM(taskedItem){
    let theListItem = createTaskElement(taskedItem)
    //console.log(theListItem)
    listUL.append(theListItem);
}

function  createTaskElement(addToLists){
    let listItem = document.createElement("li")
    let theLabel = document.createElement("label")
    let deleteButton = document.createElement("button")
    let who = document.getElementById("byWho").value
    theLabel.innerText = who + "   : " + addToLists + "." ;
    deleteButton.innerText = "Delete";
    listItem.onclick = clickedTask
    deleteButton.onclick = deleteAction
    deleteButton.className = "delete"
    listItem.appendChild(theLabel)
    listItem.appendChild(deleteButton)
    return listItem    
}

function deleteAction(){
    //this.style.display = "none"
    this.parentNode.parentNode.removeChild(this.parentNode)
}
function clickedTask(){
    //console.log("hellow")
this.classList.toggle("checked")
}

