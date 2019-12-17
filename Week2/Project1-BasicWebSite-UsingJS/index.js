/* ******************************** */
/* ************ Nav Bar *********** */
/* ******************************** */
var navBar = document.createElement("nav")
var navHome = document.createElement("a")
var navProducts = document.createElement("a")
var navAbout = document.createElement("a")
var homeLink = document.createTextNode(" Home ")
var productsLink = document.createTextNode(" Products ")
var aboutLink = document.createTextNode(" About ")
//home nav
navHome.appendChild(homeLink)
navHome.title = "Home"
navHome.href = "index.html"
navHome.setAttribute ("id" , "homeNav")
//Products Nav
navProducts.appendChild(productsLink)
navProducts.title = "Products"
navProducts.href = "products.html"
navProducts.setAttribute ("id" , "productNav")
//about Nav
navAbout.appendChild(aboutLink)
navAbout.title = "About"
navAbout.href = "about.html"
navAbout.setAttribute("id" , "aboutNav")
// **** show on webpage *****
document.body.append(navBar)
navBar.appendChild(navHome)
navBar.appendChild(navProducts)
navBar.appendChild(navAbout)
//style Nav ********
document.getElementById("homeNav").style.textDecoration = "none"
document.getElementById("productNav").style.textDecoration = "none"
document.getElementById("aboutNav").style.textDecoration = "none"
/* ******************************* */
/* ************ HEADER *********** */
/* ******************************* */
var headerOne = document.createElement("h1")

headerOne.textContent = "Dean's Page"
headerOne.setAttribute("id" , "mainHeader")
// **** show on webpage *****
document.body.append(headerOne)
//style header
document.getElementById("mainHeader").style.textAlign ="center"
document.getElementById("mainHeader").style.color = "blue"
/* ********************************** */
/* ************ PARAGRAPH *********** */
/* ********************************** */
var paraOne = document.createElement("p")

paraOne.textContent = "Hello and welcome to my webpage. I hope this is ok for this assignment. If you have any comments, please let me know."
document.body.append(paraOne)
/* ***************************** */
/* ************ LIST *********** */
/* ***************************** */
var listContainer = document.createElement("div")
var listElement = document.createElement("ul")

var listData = [
    "This",
    "is",
    "how",
    "you",
    "do",
    "it?"
]
// **** show on webpage *****
document.body.append(listContainer)
listContainer.appendChild(listElement)
for (i=0 ; i < listData.length ; ++i ){
    var listItem = document.createElement("li")
    listItem.textContent = listData[i]
    listElement.appendChild(listItem)
}

/* ******************************* */
/* ************ FOOTER *********** */
/* ******************************* */
var indexFooter = document.createElement('footer')
var footerText = document.createElement("p")
indexFooter.setAttribute("id" , "footer")
footerText.textContent = " Main Phone: 555-222-5151"
// **** show on webpage *****
document.body.append(indexFooter)
indexFooter.appendChild(footerText)
// style
document.getElementById("footer").style.position ="fixed"
document.getElementById("footer").style.left = "0"
document.getElementById("footer").style.bottom = "0"
document.getElementById("footer").style.width = "100%"
document.getElementById("footer").style.textAlign = "center"
