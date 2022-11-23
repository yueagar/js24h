function jsonParse() {
    var inString = prompt("Enter JSON object");
    var out = "";
    myObject = JSON.parse(inString);
    for (i in myObject) {
        out += "Property: " + i + " = " + myObject[i] + '\n';
    }
    alert(out);
};

var jjj = new Object();
jjj.days = ['Fri', 'Sat', 'Sun'];
jjj.feels = "Happy";

function jsonParseJJJ() {
    var a = jjj
    var b = JSON.stringify(a)
    alert(b)
}