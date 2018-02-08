//require weather-js
var weather = require("weather-js");


//user search constructor
function UserSearch (name, location) {
  //name
  this.name = name;
  //location
  this.location = location;
  //date
  this.date = Date.now();
  //do some weatherjs nonsense
  this.weatherSearch = function () {
    weather.find({search: this.location, degreeType: "F"}, function (err, result) {
      if(err) {
        console.log(err);
      } 
      console.log(JSON.stringify(result, null, 2));
    })
  }


}

//test
var newSearch = new UserSearch("john", "houston, tx");
newSearch.weatherSearch();


module.exports(UserSearch);
