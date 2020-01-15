/************* FSW110 Week5 pNp Moodifying Elements************ */
// Create Elements
var form1 = document.createElement("form");
var formInput1 = document.createElement("INPUT");
var formInput2 = document.createElement("INPUT");
var formInput3 = document.createElement("INPUT");
var formButton = document.createElement("button");
//Set attributes
form1.setAttribute("id", "formOne");
formInput1.setAttribute("id", "input1");
formInput2.setAttribute("id", "input2");
formInput3.setAttribute("id", "input3");
formButton.setAttribute("id", "button1");

//display on DOM
document.body.append(form1);
document.getElementById("formOne").appendChild(formInput1);
document.getElementById("formOne").appendChild(formInput2);
document.getElementById("formOne").appendChild(formInput3);
document.getElementById("formOne").appendChild(formButton);


// add text conecnt
formButton.textContent = "Submit"

//style
document.getElementById("formOne").style.width = "185px";
document.getElementById("formOne").style.height = "150px"
document.getElementById("formOne").style.backgroundColor = "tan";
document.getElementById("input1").style.margin = "5px"
document.getElementById("input2").style.margin = "5px"
document.getElementById("input3").style.margin = "5px"
document.getElementById("button1").style.marginLeft = "65px"


function theAlert(){
    let sayOne = document.getElementById("input1").value;
    //let sayTwo = document.getElementsByName("input2").value;
     var sayTwo = document.getElementById("input2").value;
    var sayThree = document.getElementById("input3").value;
    alert(sayOne + " " + sayTwo + " " + sayThree)
   
};
document.getElementById("button1").addEventListener("click", theAlert)