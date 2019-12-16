// H1 with Text
var headerH1 = document.createElement("h1")
headerH1.textContent = "Welcome to my JS Site"
document.body.append(headerH1)
//P wit text
var paraP = document.createElement("p")
paraP.textContent = "All of this was created with Javascript"
document.body.append(paraP)
//ol with 3 li items

    let listData = [
        "one",
        "two",
        "three",
        "four"
    ]
    var listContainer = document.createElement("div")
    var listElement = document.createElement("ol")
    var numOfItems = listData.length

    document.getElementsByTagName("body")[0].appendChild(listContainer)
    listContainer.appendChild(listElement)
    
    for (i=0; i < numOfItems; ++i){
        var listItem = document.createElement('li');
        listItem.innerHTML = listData[i];
        listElement.appendChild(listItem);
    }