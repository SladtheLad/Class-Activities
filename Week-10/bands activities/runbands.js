var bandsINeed = require("./bands.js")

console.log("A punk band is " + bandsINeed.punk + "<br /> A rap band is " + bandsINeed.rap + "<br />A classic band is " + bandsINeed.classic + "");

for (var key in bandsINeed) {
    console.log(`A ${key} band is ${bandsINeed[key]}`);
    
}