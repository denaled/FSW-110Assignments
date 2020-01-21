// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function

const form = document.getElementById("submit-me") 
const name = document.getElementById("name") 
name.setAttribute("name", "user_name"); // showing that I can create a new attribute name
const firstName = document.getElementsByName("user-name") /// assign variable using the new attribute I just created
const age = document.getElementById("age") 
age.setAttribute("id", "last-name") // showing I can create a new attribute ID or actuallt changing the attribute ID 
const lastName = document.getElementById("last-name") // assign variable using the new/changed ID





form.addEventListener("submit", (e) => {
   e.preventDefault()
// proves that the new attributes I created above work properly by changing the Type of input
   form.user_name.setAttribute("type", "color")
   lastName.setAttribute("type", "date")
   
})
