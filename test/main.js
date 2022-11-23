var olElement = document.getElementById("stgss")

var count = 0;

for (var i = 0; i < olElement.childNodes.length; i++) {
    if (olElement.childNodes[i].nodeType == 1) count++;
}

document.getElementById("cResult").innerHTML = "There are " + count + " items."
