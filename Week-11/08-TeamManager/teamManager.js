// dependency for inquirer npm package
var inquirer = require("inquirer");

function Player(name, position, offense, defense) {
  this.name = name;
  this.position = position;
  this.offense = offense;
  this.defense = defense;
};

Player.prototype.goodGame = function () {
  let coinflip = Math.random * (2 - 1) + 1;
  if (coinflip === 1) {
    this.offense += 1
  } else if (coinflip === 2) {
    this.defense += 1
  }
  console.log(`Offense: ${this.offense}, Defense: ${this.defense}`);
};

Player.prototype.badGame = function () {
  let coinflip = Math.random * (2 - 1) + 1;
  if (coinflip === 1) {
    this.offense -= 1
  } else if (coinflip === 2) {
    this.defense -= 1
  };
  console.log(`Offense: ${this.offense}, Defense: ${this.defense}`);
};

Player.prototype.printStats = function () {
  console.log(`Player Name: ${this.name}\nPosition: ${this.position}
  \nOffense: ${this.offense}\nDefense: ${this.defense}`);
}

// variable we will use to count how many times our questions have been asked
var count = 0;
// array in which we will store each of our new programmer objects
var team = [];
var subs = [];
var starters = [];

var askQuestion = function () {
  // if statement to ensure that our questions are only asked five times
  if (count < 8) {
    console.log("NEW PLAYER");
    // runs inquirer and asks the user a series of questions whose replies are
    // stored within the variable answers inside of the .then statement
    inquirer.
    prompt([{
      name: "name",
      message: "What is player name?"
    }, {
      name: "position",
      message: "What is player's position (starter or sub)?"
    }, {
      name: "offense",
      message: "What is player's starting offense (from 0 - 10)?",
      validate: function (value) {
        if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
          return true;
        }
        return false;
      }
    }, {
      name: "defense",
      message: "What is player's starting defense (from 0 - 10)?",
      validate: function (value) {
        if (isNaN(value) === false && parseInt(value) > 0 && parseInt(value) <= 10) {
          return true;
        }
        return false;
      }
    }]).then(function (answers) {
      // initializes the variable newguy to be a programmer object which will
      // take in all of the user's answers to the questions above
      var newPlayer = new Player(
        answers.name,
        answers.position,
        answers.offense,
        answers.defense);
      // pushes newguy object into our array
      team.push(newPlayer);
      if (answers.position === "starter" && starters.length < 5) {
        starters.push(newPlayer);
      } else if (answers.position === "sub") {
        subs.push(newPlayer);
      }
      console.log(`Subs: ${JSON.stringify(subs)}\nStarters: ${JSON.stringify(starters)}`)
      // add one to count to increment our recursive loop by one
      count++;
      // run the askquestion function again so as to either end the loop or ask the questions again
      askQuestion();
    });
    // else statement which runs a for loop that will execute .printInfo() for each object inside of our array
  } else {
    for (var x = 0; x < team.length; x++) {
      team[x].printStats();
    }
  }
};

// call askQuestion to run our code
askQuestion();

var playGame = function () {

}




/* Over the course of this assignment you are going to put together a function which uses constructors and user input to create and manage a team of players.

* Start out by creating a constructor function called "Player" with the following properties and methods...

  * `name`: Property which contains the player's name
  * `position`: Property which holds the player's position
    * `offense`: Property which is a value between 1 and 10 to show how good this player is on offense
      * `defense`: Property which is a value between 1 and 10 to show how good this player is on defense
        * `goodGame`: Method which increases either the player's offense or defense property based upon a coinflip.
          * `badGame`: Method which decreases either the player's offense or defense property based upon a coinflip.
            * `printStats`: Method which prints all of the player's properties to the screen

              * Now create a program which allows the user to create 8 unique players; 5 starters and 3 subs.It should take as user input the name, position, offense, and defense of each player.

* Once all of the players have been created, print their stats.

* Once your code is functioning properly, move on to create a function called "playGame" which will be run after all of the players have been created and will do the following:

  * Run 5 times.Each time the function runs:
  * Two random numbers between 1 and 20 are rolled and compared against the starters' offensive and defensive stats
    * If the first number is lower than the sum of the team's offensive stat, add one point to the team's score.
      * If the second number is higher than the sum of the team's defensive stat, remove one point from the team's score.
    * After the score has been changed, prompt the user to allow them to substitute 1 player from within the starters array with 1 player from within the subs array.
  * After the game has finished(been run  5 times):
    * If the score is positive, run`goodGame` for all of the players currently within the starters array.
    * If the score is negative, run`badGame` for all of the players currently within the starters array.
    * If the score is equal to zero, do nothing with the starters.
    * Give the user a message about if they won, and the status of their starters.
    * After printing the results, ask the user if they would like to play again.
      * Run`playGame` from the start once more if they do.
      * End the program if they don't.

  * HINT: Remember to use recursion when looping with inquirer! Otherwise your program might not return the prompts as you expect.

* HINT: It has been a while since we have worked with random numbers explicitly.If you are having troubles, look up Math.random on Google and you should find some resources to help.
*/