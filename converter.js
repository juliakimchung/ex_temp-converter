var input = document.getElementById("input");

var f = document.getElementById("f");
var c =document.getElementById("c");
var submit = document.getElementById("submit");
var clear = document.getElementById("clear")




// Get a reference to the button element in the DOM


// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (inputFromCheckConverter) {

	//var f = document.getElementById("f");
	//var c =document.getElementById("c");
 if (f.checked) {

	toFahrenheit(inputFromCheckConverter);

} else if (c.checked) {
	toCelsius(inputFromCheckConverter);

} else {

	alert("please select");
}

}



function checkInput() {
	if (input.value) {
		determineConverter(input.value);

	} else {
		console.log("it's not");
	}

  
}

function toCelsius (inputFromDetermineConverter) {
	var outputTemp = (inputFromDetermineConverter * 1.8) + 32;
	/*console.log("celsius:", input);*/
	outputToDom(outputTemp, "c");

	/*return outputTemp;*/

}


function toFahrenheit (inputFromDetermineConverter) {

	var outputTemp = (inputFromDetermineConverter - 32) * 5/9;
	/*return outputTemp;*/
	//console.log ("Fahrenheit", outputTemp);
	outputToDom(outputTemp, "f");
}




function outputToDom(outputTemp, type) {

	var output = document.getElementById("output");
	

	//console.log("colorText", outputTemp.toFixed(1), type);

	if (type ==="c") {
			if (outputTemp > 32) {
				output.innerHTML = "<p class ='red'>" + outputTemp + "</p>";

			} else if (outputTemp  < 0) {
				output.innerHTML = "<p class ='blue'>" + outputTemp + "</p>";

			} else {
				output.innerHTML = "<p class = 'green'>" + outputTemp + "</p>"
			}


	}

	else {

		if (type ==="f") {
			if (outputTemp > 90) {
				output.innerHTML = "<p class ='red'>" + outputTemp + "</p>";

			} else if (outputTemp  < 32) {
				output.innerHTML = "<p class ='blue'>" + outputTemp + "</p>";

			} else {
				output.innerHTML = "<p class = 'green'>" + outputTemp + "</p>"
			}


		}
	}
	
}

function resetForm() {
	
	input.value = " ";
	output.innerHTML = " ";
	f.checked = false;
	c.checked = false;

}
// Assign a function to be executed when the button is clicked
submit.addEventListener("click", checkInput);
clear.addEventListener("click", resetForm);

















