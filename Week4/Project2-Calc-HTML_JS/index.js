/****************************************************************** */
/** FSW110 Week 4 Project 2: Build a Calculator with HTML and JS ** */
/****************************************************************** */

/********************** */
/******ADDITION ********/
/******************** */
//create elements
var div1 = document.createElement("div");
var div1Header = document.createElement("h1")
var div1Input1 = document.createElement("INPUT");
var div1Input2 = document.createElement("INPUT");
var div1Button = document.createElement("button");
var div1Answer = document.createElement("h3");
//set attributes
div1.setAttribute("id", "addDiv");
div1.setAttribute("align", "center")
div1Header.setAttribute("id", "div1Header1");
div1Input1.setAttribute("type", "number");
div1Input1.setAttribute("id", "addInput1")
div1Input1.setAttribute("placeholder", "Number")
div1Input2.setAttribute("type", "number");
div1Input2.setAttribute("id", "addInput2");
div1Input2.setAttribute("placeholder", "Number");
div1Button.setAttribute("id", "addButton");
div1Answer.setAttribute("id", "addAnswer");
// add text/content
div1Header.textContent = "Addition";
div1Button.textContent = "Click to Add";
//display on DOM
document.body.append(div1);
document.getElementById("addDiv").appendChild(div1Header);
document.getElementById("addDiv").appendChild(div1Input1);
document.getElementById("addDiv").appendChild(div1Input2);
document.getElementById("addDiv").appendChild(div1Button);
//style
document.getElementById("addDiv").style.width = "500px";
document.getElementById("addDiv").style.height = "130px";
document.getElementById("addDiv").style.backgroundColor = "grey";
document.getElementById("addInput1").style.margin = "5px"
document.getElementById("addInput1").style.padding = "2px"
document.getElementById("addInput2").style.margin = "5px"
document.getElementById("addInput2").style.padding = "2px"
//Addition Function
function addThem(){
var AddNum1 = parseInt(document.getElementById("addInput1").value);
var AddNum2 = parseInt(document.getElementById("addInput2").value);
var addThemAnswer = AddNum1 + AddNum2;
div1Answer.textContent = AddNum1 +" + "  + AddNum2 + " = " + addThemAnswer;
document.getElementById("addDiv").appendChild(div1Answer);
document.getElementById("addAnswer").style.backgroundColor = "blue";
document.getElementById("addAnswer").style.color = "white";
};
// addition Submit event listener
document.getElementById("addButton").addEventListener("click",addThem);

/*************************** */
/********* SUBTRACT *********/
/************************* */
//create elements
var div2 = document.createElement("div");
var div2Header = document.createElement("h1")
var div2Input1 = document.createElement("INPUT");
var div2Input2 = document.createElement("INPUT");
var div2Button = document.createElement("button");
var div2Answer = document.createElement("h3");
//set attributes
div2.setAttribute("id", "subDiv");
div2.setAttribute("align", "center")
div2Header.setAttribute("id", "div2Header1");
div2Input1.setAttribute("type", "number");
div2Input1.setAttribute("id", "subInput1")
div2Input1.setAttribute("placeholder", "Number")
div2Input2.setAttribute("type", "number");
div2Input2.setAttribute("id", "subInput2");
div2Input2.setAttribute("placeholder", "Number");
div2Button.setAttribute("id", "subButton");
div2Answer.setAttribute("id", "subAnswer");
// Sub text/content
div2Header.textContent = "Subtraction";
div2Button.textContent = "Click to Subtract";
//display on DOM
document.body.append(div2);
document.getElementById("subDiv").appendChild(div2Header);
document.getElementById("subDiv").appendChild(div2Input1);
document.getElementById("subDiv").appendChild(div2Input2);
document.getElementById("subDiv").appendChild(div2Button);
//style
document.getElementById("subDiv").style.width = "500px";
document.getElementById("subDiv").style.height = "130px";
document.getElementById("subDiv").style.backgroundColor = "tan";
document.getElementById("subInput1").style.margin = "5px"
document.getElementById("subInput1").style.padding = "2px"
document.getElementById("subInput2").style.margin = "5px"
document.getElementById("subInput2").style.padding = "2px"
//Subtration Function
function subThem(){
    var subNum1 = parseInt(document.getElementById("subInput1").value);
    var subNum2 = parseInt(document.getElementById("subInput2").value);
    var subThemAnswer = subNum1 - subNum2;
    div2Answer.textContent = subNum1 +" - "  + subNum2 + " = " + subThemAnswer;
    document.getElementById("subDiv").appendChild(div2Answer);
    document.getElementById("subAnswer").style.backgroundColor = "blue";
    document.getElementById("subAnswer").style.color = "white";
    };
// addition Submit event listener
document.getElementById("subButton").addEventListener("click",subThem);
 /*************************** */
/********* Multiply *********/
/************************* */
//create elements
var div3 = document.createElement("div");
var div3Header = document.createElement("h1")
var div3Input1 = document.createElement("INPUT");
var div3Input2 = document.createElement("INPUT");
var div3Button = document.createElement("button");
var div3Answer = document.createElement("h3");
//set attributes
div3.setAttribute("id", "mulDiv");
div3.setAttribute("align", "center")
div3Header.setAttribute("id", "div3Header1");
div3Input1.setAttribute("type", "number");
div3Input1.setAttribute("id", "mulInput1")
div3Input1.setAttribute("placeholder", "Number")
div3Input2.setAttribute("type", "number");
div3Input2.setAttribute("id", "mulInput2");
div3Input2.setAttribute("placeholder", "Number");
div3Button.setAttribute("id", "mulButton");
div3Answer.setAttribute("id", "mulAnswer");
// Sub text/content
div3Header.textContent = "Multiply";
div3Button.textContent = "Click to Multiply";
//display on DOM
document.body.append(div3);
document.getElementById("mulDiv").appendChild(div3Header);
document.getElementById("mulDiv").appendChild(div3Input1);
document.getElementById("mulDiv").appendChild(div3Input2);
document.getElementById("mulDiv").appendChild(div3Button);
//style
document.getElementById("mulDiv").style.width = "500px";
document.getElementById("mulDiv").style.height = "130px";
document.getElementById("mulDiv").style.backgroundColor = "lightgrey";
document.getElementById("mulInput1").style.margin = "5px"
document.getElementById("mulInput1").style.padding = "2px"
document.getElementById("mulInput2").style.margin = "5px"
document.getElementById("mulInput2").style.padding = "2px"
//Multiply Function
function mulThem(){
    var mulNum1 = parseInt(document.getElementById("mulInput1").value);
    var mulNum2 = parseInt(document.getElementById("mulInput2").value);
    var mulThemAnswer = mulNum1 * mulNum2;
    div3Answer.textContent = mulNum1 +" * "  + mulNum2 + " = " + mulThemAnswer;
    document.getElementById("mulDiv").appendChild(div3Answer);
    document.getElementById("mulAnswer").style.backgroundColor = "blue";
    document.getElementById("mulAnswer").style.color = "white";
    };
// addition Submit event listener
document.getElementById("mulButton").addEventListener("click",mulThem);