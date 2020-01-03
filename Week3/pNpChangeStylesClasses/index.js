var listWebPageDetails = [
    {
        typeElement: "h1",
        elementText: "Week 3 pNp Changing Styles and Cleasses Using JS",
        idName: "mHeader",
        fSize: "50px",
        fWeight: "900",
        fFamily: "georgia",
        textColor: "blue",
        texAlign: "center" 
    },{
        typeElement: "h2",
        elementText: "Written by Dean Fehr",
        idName: "hOne",
        fSize: "35px",
        fWeight: "200",
        fFamily: "georgia",
        textColor: "red",
        texAlign: "center"
    },{
        typeElement: "p",
        elementText: "Just to put something in something so something shows up.",
        idName: "border",
        fSize: "20px",
        fWeight: "lighter",
        fFamily: "sans-serif",
        textColor: "cornflowerblue",
        texAlign: "left"
    }
];



function makeWebPage (webPageLists){
    for (i = 0; i < webPageLists.length ; ++i ){
        var makeElement = document.createElement(webPageLists[i].typeElement);
        makeElement.textContent = webPageLists[i].elementText;
        makeElement.setAttribute("id", webPageLists[i].idName);
        //makeElement.setAttribute("class", webPageLists[i].idName);
        document.body.append(makeElement);
        //style
        document.getElementById(webPageLists[i].idName).style.fontSize = webPageLists[i].fSize;
        document.getElementById(webPageLists[i].idName).style.fontWeight = webPageLists[i].fWeight;
        document.getElementById(webPageLists[i].idName).style.fontFamily = webPageLists[i].fFamily;
        document.getElementById(webPageLists[i].idName).style.color = webPageLists[i].textColor;
        document.getElementById(webPageLists[i].idName).style.textAlign = webPageLists[i].texAlign;

        // document.getElementsByClassName(webPageLists[i].idName).style.fontSize = webPageLists[i].fSize;
        // document.getElementsByClassName(webPageLists[i].idName).style.fontWeight = webPageLists[i].fWeight;
        // document.getElementsByClassName(webPageLists[i].idName).style.fontFamily = webPageLists[i].fFamily;
        // document.getElementsByClassName(webPageLists[i].idName).style.color = webPageLists[i].textColor;
        // document.getElementsByClassName(webPageLists[i].idName).style.textAlign = webPageLists[i].texAlign;
    };
};
makeWebPage(listWebPageDetails);