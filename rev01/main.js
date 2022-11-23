function plus() {
	var num1 = prompt('Number 1');
	var num2 = prompt('Number 2');
	//var num3 = num1 + num2;
	//var result = "The result is " + num3 + ".";
	var result = "The result is " + (num1+num2) + ".";
	alert(result);
};

function minus() {
	var num1 = prompt('Number 1');
	var num2 = prompt('Number 2');
	var num3 = num1 - num2;
	var result = "The result is " + num3 + ".";
	alert(result);
};

function multiple() {
	var num1 = prompt('Number 1');
	var num2 = prompt('Number 2');
	var num3 = num1 * num2;
	var result = "The result is " + num3 + ".";
	alert(result);
};

function divide() {
	var num1 = prompt('Number 1');
	var num2 = prompt('Number 2');
	var num3 = num1 / num2;
	var result = "The result is " + num3 + ".";
	alert(result);
};

for(i=1;i<6;i++) {
	document.write("<p>Looping function!! for " + i + " times</p>");
};

document.write("<p>Is 1/2 * 1/2 = 2/4 which is 0.5?</p>")

function print(a) {
    document.write(a)
};

(1/2)*(1/2) === 2/4 ? print("<p>Really? 1/2 * 1/2 is 2/4?</p>") : print("<p>Sure No!! 1/2 * 1/2 is not 0.5, but " + 1/2*1/2 + ".")