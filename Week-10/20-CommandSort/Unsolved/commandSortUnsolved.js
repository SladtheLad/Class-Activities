// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================


var num1 = parseFloat(process.argv[2]);
var num2 = parseFloat(process.argv[3]);
var num3 = parseFloat(process.argv[4]);

var numArray = [num1, num2, num3];

var sort = numArray.sort();
console.log(sort);