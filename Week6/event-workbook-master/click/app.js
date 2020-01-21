// make the box disapear when the user clicks it

/************************************************ */
// this was my way of working to see how to get Classname to work...
// ClassName is treated like an array...
    // const work = document.getElementsByTagName("DIV")[0].className
    // const theBox = document.getElementsByClassName(work)
    // const boxThis = document.getElementById("red-box")
    // document.getElementById("test").textContent = theBox.length

    // for (var i=0; i < theBox.length ; i++){
    //     theBox[i].addEventListener("click", function(e){
    //         //boxThis.style.backgroundColor = "blue"
            
    //         theBox[0].style.backgroundColor = "tan"
    //         document.getElementById("test").textContent = "hellow"
    //     })
        
    // }
//***************************************************** */

const theBox = document.getElementsByClassName("red-box")
theBox[0].addEventListener("click",function(e){
    theBox[0].style.backgroundColor = "transparent"
})