// Instructions:
// Convert the below geocoding code from earlier today so that it uses inquirer.js instead of process.argv to handle the intake of user inputs. 
// Make sure your new code provides the exact same output as it did with process.argv.

// HINT: Don't forget to create your package.json file and save the correct packages to it.
// HINT: You should not need to change *that much* code.

// ========================================================================================================================

// Include the geocoder NPM package (Remember to run "npm install geocoder"!)
var geocoder = require("geocoder");
var inquirer = require("inquirer");


// Create a "Prompt" with a series of questions.
inquirer
  .prompt([
    // Here we create a basic text prompt.
    {
      type: "input",
      message: "What is your current city?",
      name: "city"
    }
  ])
  .then(function (city) {
    var address = city.city;
    console.log(address);

    geocoder.geocode(address, function (err, data) {
      if (!err) {
      console.log(JSON.stringify(data, null, 2));
      } else {
        console.log(err);
      }
    });
  });

/*// Take in the command line arguments
var nodeArgs = process.argv;

// Create an empty string for holding the address
var address = "";

// Capture all the words in the address (again ignoring the first two Node arguments)
for (var i = 2; i < nodeArgs.length; i++) {

  // Build a string with the address.
  address = address + "" + nodeArgs[i];
  console.log(address);

}
*/
