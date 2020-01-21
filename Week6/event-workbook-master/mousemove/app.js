const theBox = document.getElementsByClassName("red-box")
theBox[0].addEventListener("mousemove",function(e){
    var x = event.clientX
    var y = event.clientY
    var coords = "X coordinates: " + x + ", Y coordinates: " + y;
    theBox[0].textContent = coords
})