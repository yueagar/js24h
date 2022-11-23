var now = new Date()
var day = now.getDay()
var realday = "Day" + (day + 1)

switch (realday) {
    case "Day1":
        var today = "Monday"
        break;
    case "Day2":
        var today = "Tuesday"
        break;
    case "Day3":
        var today = "Wednesday"
        break;
    case "Day4":
        var today = "Thursday"
        break;
    case "Day5":
        var today = "Friday"
        break;
    case "Day6":
        var today = "Saturday"
        break;
    case "Day7":
        var today = "Sunday"
        break;
    default:
        console.error("Date error.")
        break;
}

function getToday() {
    document.getElementById("result").innerHTML = "<p>Today is " + today + "."
}

var month = new Array()
month[0] = "January"
month[1] = "February"
month[2] = "March"
month[3]= "April"
month[4] = "May"
month[5] = "June"
month[6] = "July"
month[7] = "August"
month[8] = "September"
month[9] = "October"
month[10] = "November"
month[11] = "December"

var message = ""

for (i = 0; i < 12; i++) {
    message += 'Month ' + (i + 1) + ": " + month[i] + '<br>';
}

document.getElementById("result2").innerHTML = "<p>" + message + "</p>"