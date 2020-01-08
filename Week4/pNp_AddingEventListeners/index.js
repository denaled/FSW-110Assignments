//********************************************************** */
/********* FSW110 Week 4 pNp Adding Event Listeners********* */
//********************************************************** */
var divBox = document.createElement("div");
divBox.setAttribute("id", "Box1");
document.body.append(divBox);
//create orginal box 
var boxID = document.getElementById("Box1");
boxID.style.width = "200px";
boxID.style.height = "200px";
boxID.style.backgroundColor = "tan";



function mOver(){
    boxID.style.backgroundColor = "blue";
    boxID.textContent = "Mouse Over";
};
function mNormal(){
    boxID.style.backgroundColor = "tan";
    boxID.textContent = "Normal Box";
};
function mDown(){
    boxID.style.backgroundColor = "red";
    boxID.textContent = "Mouse Down";
};
function mUp(){
    boxID.style.backgroundColor = "yellow";
    boxID.textContent = "Mouse Up";
};
function mDblClick(){
    boxID.style.backgroundColor = "green";
    boxID.textContent = "Double Click";
};
function mScroll(){
    boxID.style.backgroundColor = "orange";
    boxID.textContent = "Mouse Scroll";
}
function keydownEvents(){
    var keyCode = event.which;
   boxID.textContent = keyCode;
   if (keyCode === 114){
    boxID.style.backgroundColor = "red"
    boxID.textContent = "Key Press R";
   }else if(keyCode === 121){
    boxID.style.backgroundColor = "yellow";
    boxID.textContent = "Key Press Y";
   }else if (keyCode === 103){
    boxID.style.backgroundColor = "green";
    boxID.textContent = "Key Press G";
   }else if (keyCode === 111){
    boxID.style.backgroundColor = "orange";
    boxID.textContent = "Key Press O";
   }   
}
boxID.addEventListener("mouseover", mOver);
boxID.addEventListener("mouseleave", mNormal);
boxID.addEventListener("mousedown", mDown);
boxID.addEventListener("mouseup", mUp);
boxID.addEventListener("dblclick", mDblClick);
boxID.addEventListener("wheel", mScroll);

document.body.addEventListener("keypress", keydownEvents);
document.body.addEventListener("keyup", mNormal);



