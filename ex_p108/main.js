var myString01 = "Hello World! I am Yue Ka Leung! "
var myString02 = "I am a boy!"

var myArray01 = new Array()
myArray01[0] = "I am Yue Ka Leung from Hong Kong."
myArray01[1] = "I am a boy."
myArray01[2] = "I am 14 years old."
myArray01[3] = "I like programming."
myArray01[4] = "Anyway, Hello World!"

var myArray02 = new Array()
myArray02[0] = "Lmao I am doing an exercise!"
myArray02[1] = "which is about Javascript!"

var myArray03 = new Array()
myArray03[0] = "I am Yue Ka Leung from Hong Kong."
myArray03[1] = "I am a boy."
myArray03[2] = "I am 14 years old."
myArray03[3] = "I like programming."
myArray03[4] = "Anyway, Hello World!"

var myArray04 = new Array()
myArray04[0] = "I am Yue Ka Leung from Hong Kong."
myArray04[1] = "I am a boy."
myArray04[2] = "I am 14 years old."
myArray04[3] = "I like programming."
myArray04[4] = "Anyway, Hello World!"


var eString01 = myString01.concat(myString02) // returns Hello World! I am Yue Ka Leung! I am a boy!
var eString02 = myString01.indexOf("l") // returns 2
var eString03 = myString01.lastIndexOf("a") // returns 23 ( last appearance )
var eString04 = myString01.replace("Yue Ka Leung", "Handsome Boy") // returns Hello World! I am Handsome Boy!
var eString05 = myString01.split(" ") // returns an array, which will be ['Hello','World','I','am',Yue','Ka','Leung!', '']
var eString06 = myString01.substr(0,5) // returns Hell
var eString07 = myString01.toLowerCase() // returns hello world! i am yue ka leung!
var eString08 = myString01.toUpperCase() // returns HELLO WORLD! I AM YUE KA LEUNG!

var eArray01 = myArray01.concat(myArray02) // returns an array, which will be ['Hello'......'which is about Javascript']
var eArray02 = myArray01.join(" ") // returns a single string, which will be "I am Yue Ka Leung from Hong Kong. I am a boy. ...... Hello World!"
var eArray03 = myArray01.toString() // returns a single string, which will be "I am Yue Ka Leung from Hong Kong.,I am a boy.,......Hello World!"
var eArray04 = myArray01.indexOf("I am a boy.") // returns 1
var eArray05 = myArray01.lastIndexOf("Anyway, Hello World!") // returns 4
var eArray06 = myArray01.slice(0, 3) // returns an array, which will be ["I am Yue Ka Leung from Hong Kong.", "I am a boy.", "I am 14 years old."]
var eArray07 = myArray03.sort() // returns an array, which will carry out an alphabetical sort
var eArray08 = myArray04.splice(0,3) // returns an array, which will be ["I am Yue Ka Leung from Hong Kong.", "I am a boy.", "I am 14 years old."], and it's what will be removed from myArray01

function l(a) {
    console.log(a)
}

l(eString01);
l(eString02);
l(eString03);
l(eString04);
l(eString05);
l(eString06);
l(eString07);
l(eString08);
l(eArray01);
l(eArray02);
l(eArray03);
l(eArray04);
l(eArray05);
l(eArray06);
l(eArray07);
l(eArray08);