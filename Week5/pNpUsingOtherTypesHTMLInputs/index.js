/******************FDW110 Week 5 pNp Using other types of HTML Inputs************************* */

const form = document.Form1

form.addEventListener("submit", (event) => {
    event.preventDefault()
   // document.getElementById("test").textContent = form.gender.value 
   form.style.backgroundColor = "blue"
   var newLine = "\r\n"
   const checkedFoods = []
   for(let i=0; i < form.foodRestrictions.length; i++){
       if(form.foodRestrictions[i].checked){
           checkedFoods.push(form.foodRestrictions[i].value)
       }
   }

    confirm("First name: " + form.fName.value + 
    newLine +"Last Name: " + form.lName.value +
    newLine +"Age: " + form.age.value +
    newLine + "Gender: " + form.gender.value +
    newLine + "Location: " + form.city.value +
    newLine + "Dietary restrictions: " + checkedFoods)
    
})