// fs is a core Node package for reading and writing files
var fs = require("fs");
var operator = process.argv[2];
var num = parseFloat(process.argv[3]);
var lottoNum = Math.floor(Math.random() * 5);
var winNum = 50;
//console.log(operator);
//console.log(num);


// This block of code will read from the "movies.txt" file.
// It's important to include the "utf8" parameter or the code will provide stream data (garbage)
// The code will store the contents of the reading inside the variable "data"
fs.readFile("bank.txt", "utf8", function (error, data) {
	//console.log(data);
	var dataArr = data.split(", ");

	// We will then re-display the content as an array for later use.
	console.log(dataArr);

	//CAN ALSO DO SWITCH CASING********************************
	// If the code experiences any errors it will log the error to the console.
	if (error) {
		return console.log(error);
	} else if (operator === "total") {


		var sum = 0;
		for (var i = 0; i < dataArr.length; i++) {
			sum += parseFloat(dataArr[i])
		}
		console.log(sum);

	} else if (operator === "deposit") {
		fs.appendFile("bank.txt", ", " + num, function (err, data) {

			if (err) {
				console.log(err);
			} else if (num) {
				console.log("Money Deposited!");
			}

		});
	} else if (operator === "withdraw") {
		fs.appendFile("bank.txt", ", -" + num, function (err, data) {

			if (err) {
				console.log(err);
			} else if (num) {
				console.log("Money Withdrawn!");
			}

		});
	} else if (operator === "lotto" && lottoNum === 1) {
		fs.appendFile("bank.txt", ", -" + num, function(err, data) {

			if (err) {
				console.log(err);
			} else if (num) {
				console.log("You Won!");
				fs.appendFile("bank.txt", ", " + winNum, function(err){
					
					if (err) {
						console.log(err);
					}
				});
			};
		});
	} else if (operator === "lotto" && lottoNum !== 1) {
		fs.appendFile("bank.txt", ", -" + num, function(err, data){
			if (err) {
				console.log(err);
			} else {
			console.log("You lost!")
			};
		});

	}
});