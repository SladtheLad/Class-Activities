// Create a basic command line Node application using the inquirer package.
// Your application should ask the user any five questions of your choosing.
// The question set should include at least one:

//    - Basic input,
//    - Password,
//    - List,
//    - Checkbox,
//    - and Confirm

// Then if a user's password matches a pre-defined password, re-display the data back to the user with some text. 
// See the inquirer GitHub documentation "examples" page if you need help.

// Remember to be creative!

// ========================================================================


// Load the NPM Package inquirer
var inquirer = require("inquirer");

// Create a "Prompt" with a series of questions.
inquirer
    .prompt([
        // Here we create a basic text prompt.
        {
            type: "input",
            message: "What is your name?",
            name: "username"
        },
        {
            type: "input",
            message: "What is your favorite drink?",
            name: "answer"
        },
        {
            type: "input",
            message: "What kind of music do you like?",
            name: "answer",
        },
        // Here we create a basic password-protected text prompt.
        {
            type: "input",
            message: "What do you like about coding?",
            name: "answer"
        },
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        },
        // Here we give the user a list to choose from.
        {
            type: "list",
            message: "Which show do you choose?",
            choices: ["X-Files", "Star Trek", "Friends"],
            name: "show"
        },
        // Here we ask the user to confirm.
        {
            type: "confirm",
            message: "Are you sure:",
            name: "confirm",
            default: true
        }
    ])
    .then(function (inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {
            console.log("\nWelcome " + inquirerResponse.username + "\nI feel you on your answer: (" + inquirerResponse.answer + ")");
            if (inquirerResponse.show === "Friends") {
            console.log("Your choice in " + inquirerResponse.show + " is wrong!\n");
            } else {
                console.log("Your choice in " + inquirerResponse.show + " is valid!\n");
            };
        } 
        else {
            console.log("\nThat's okay " + inquirerResponse.username + ", come again when you are more sure.\n");
        }
    });
