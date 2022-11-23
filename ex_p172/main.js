var cElement = document.getElementsByTagName("BODY")[0]
var count = ""
var cArray = ""
for (i = 0; i < cElement.childNodes.length; i++) {
    if(cElement.childNodes[i].nodeType == 8) {
        count++
        cArray += " " + cElement.childNodes[i].nodeValue // returns The things I need to do before watching the game on TV
    }
}

document.getElementById("counter").innerHTML = cArray

//-------------------

var pElement = document.getElementById("para2")
var newPara = document.createElement("P")
var nPara = document.createTextNode("1233211234567")

newPara.appendChild(nPara)

function insertAfter(newNode, targetNode) {
    targetNode.parentNode.insertBefore(newNode, targetNode.nextSibling) // pElement.parentNode.insertBefore(newPara, pElement.nextSibling)，在para2之後的#text前加插newPara(nPara)
}