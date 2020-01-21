/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */
const output = document.getElementById("output")

document.addEventListener("keypress", function(e){
    var theCode = event.which || event.keyCode
    var theKey = String.fromCharCode(theCode)
    
    output.textContent = "The Key you pressed is:  " + theKey  + "  and the code is: " + theCode
})

