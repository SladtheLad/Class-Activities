//grab values from all input fields
//create on click for submit button to use said values and push them into firebase/dom
//append it to appropriate table class
//each employee added needs 
// Initialize Firebase
var config = {
    apiKey: "AIzaSyC-2eRSpVsoybrpyIgX84zdxmp-YrflpHI",
    authDomain: "timesheet-88554.firebaseapp.com",
    databaseURL: "https://timesheet-88554.firebaseio.com",
    projectId: "timesheet-88554",
    storageBucket: "timesheet-88554.appspot.com",
    messagingSenderId: "906846631036"
};
firebase.initializeApp(config);

var database = firebase.database();
var employeeName = ""
var role = ""
var startDate = ""
var monthsWork = ""
var monthlyRate = ""
var billed = ""

$("#submit-button").on("click", function (e) {
    e.preventDefault();

    employeeName = $("#employeeName-input").val().trim();
    role = $("#role-input").val().trim();
    startDate = $("#dateStart-input").val().trim();
    monthsWork = $("#monthlyIncome-input").val().trim();
    monthlyRate = $("#monthsWorked-input").val().trim();
    billed = $("#totalBilled-input").val().trim();

    database.ref().push({
        employeeName: employeeName,
        role: role,
        startDate: startDate,
        monthsWork: monthsWork,
        monthlyRate: monthlyRate,
        billed: billed


    });

});

database.ref().on("child_added", function (data) {
    console.log(data.val().employeeName);

    $("#employeeNames").append(data.val().employeeName);
    $("#roles").append(data.val().role);
    $("#datesStarted").append(data.val().startDate);
    $("#monthlyIncomes").append(data.val().monthsWork);

});

function makeRows(data) {
    const result = [];

    for (var i = 0; i < data.length; i += 1) {
        var trow = "<tr>";

        trow += ("<td>" + data[i].val + "</td>")

        trow += "</tr>"

        result.push(trow)
    };

    return trow;
};
