function timeNow() {
	var output = "";
	var now = new Date();
	output += "<p>Date: " + now.getDate();
	output += "<br>Month: " + (now.getMonth() + 1);
	output += "<br>Year: " + now.getFullYear();
	output += "<br>Hours: " + now.getHours();
	output += "<br>Minutes: " + now.getMinutes();
	output += "<br>Seconds: " + now.getSeconds();
	output += "<br>Full Form 1: " + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
	output += "<br>Full Form 2: " + now + "</p>";
	document.getElementById("time").innerHTML = output;
}