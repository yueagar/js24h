var str01 = "i am a handsome boy";
//var str02 = "1234567890abcdefg";

//not my function, idk
function capital_letter(str) {
    str = str.split(" ");

    for (var i = 0, x = str.length; i < x; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }

    return str.join(" ");
}

//wtf is it?
/* function remove_letter(num) {
    var str02 = "1234567890abcdefg";
    str02.slice(0, 17-num)
} */
var str02 = "1234567890abcdefg";
var num = 3
var str03 = str02.slice(0, 17 - num)

document.getElementById("string01").innerHTML = capital_letter(str01);
document.getElementById("string02").innerHTML = str03;

/* 1st Function from: https://www.w3resource.com/javascript-exercises/javascript-basic-exercise-50.php */