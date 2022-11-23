function tempC() {
	var temp1 = document.getElementById("tempC").value
	var temp2 = temp1 * 1.8 + 32
	document.getElementById("result").innerHTML = 'The temperature in Fahrenheit is ' + Math.round(temp2) + '.'
}

function tempF() {
	var temp1 = document.getElementById("tempF").value
	var temp2 = (temp1 - 32) * (5 / 9)
	document.getElementById("result").innerHTML = 'The temperature in Celsius is ' + Math.round(temp2) + '.'
}