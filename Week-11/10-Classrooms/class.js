var Students = require("./student");

function Class (studentsArray, numStudents, profName, roomNum, Students) {
  this.studentsArray = studentsArray;
  this.numStudents = numStudents;
  this.profName = profName;
  this.roomNum = roomNum;
  this.Students = Students;

}

var student = new Student ("nick", "philosophy", 3.6);