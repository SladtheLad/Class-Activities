var operator = process.argv[2];
if (operator === "add") {
    console.log(parseFloat(process.argv[3]) + parseFloat(process.argv[4]));
} else if (operator === "subtract") {
    console.log(parseFloat(process.argv[3]) - parseFloat(process.argv[4]));
} else if (operator === "multiply") {
    console.log(parseFloat(process.argv[3]) * parseFloat(process.argv[4]));
} else if (operator === "divide") {
    console.log(parseFloat(process.argv[3]) / parseFloat(process.argv[4]));
} else if (operator === "exp") {
    console.log(Math.pow(process.argv[3], process.argv[4]));
}; //else if (operator === "algebra") {
    //console.log(parseFloat(process.argv[3] ^ parseFloat(process.argv[4])));
