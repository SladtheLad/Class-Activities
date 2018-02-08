const inquirer = require("inquirer");

inquirer.
prompt([{
            type: "input",
            message: "What is your character's name?",
            name: "name"
        },
        {
            type: "input",
            message: "What is your character's profession?",
            name: "profession"
        },
        {
            type: "input",
            message: "What is your character's gender?",
            name: "gender"
        },
        {
            type: "input",
            message: "What is your character's age?",
            name: "age"
        },
        {
            type: "input",
            message: "What is your character's strength?",
            name: "strength"
        },
        {
            type: "input",
            message: "What is your character's Hit Points?",
            name: "HitPoints"
        },
    ])
    .then(function (name, profession, gender, age, strength, HitPoints) {
            this.name = name.name;
            this.profession = profession.profession;
            this.gender = gender.gender;
            this.age = age.age;
            this.strength = strength.strength;
            this.HitPoints = HitPoints.HitPoints;

            console.log(JSON.stringify(TouchList, null, 2));
    });


        /*
function Character(name, profession, gender, age, strength, HitPoints) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.HitPoints = HitPoints;

    this.PrintStats = function () {
        for (var x in this) {
            if (typeof this[x] === "string" || typeof this[x] === "number") {
                console.log(x + ": " + this[x]);
            }
        }
    }

    this.isAlive = function () {
        return this.HitPoints > 0;
    }

    this.attack = function (Character) {
        return Character.HitPoints -= this.strength;
    }

    this.levelUp = function () {
        this.age += 1
        this.strength += 5
        this.HitPoints += 25
    }

}


    */
        //var BeefCake = new Character("BeefCake", "Stripping", "Male", 22, 15, 150);
        //var SheEatsCake = new Character("SheEatsCake", "professional eater", "Female", 5, 100, 10000);

        //BeefCake.PrintStats();
        //SheEatsCake.PrintStats();