window.onload= function main() {
	let myHeading = document.querySelector('h1');
	myHeading.textContent = 'Hello world!';
}


function myFunction() {
	document.getElementById("demo").innerHTML = "The top button did this";
}

function myFunction2() {
	document.getElementById("demo").innerHTML = "The bottom button did this";
}

function inputTest() {
	var input_test1 = document.getElementById("input_test1").value;
	var label_test1 = document.getElementById("label_test1");
	var par_test1 = document.getElementById("par_test1");

	document.getElementById("par_test1").innerHTML = "Clicked!";

	//par_test1.innerHTML = input_test1;

	//label_test1.text = input_test1.value;
}