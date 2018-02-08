//  Interval Exercise (follow the instructions below).

//  This code will run as soon as the page loads.
window.onload = function () {

    //  Click events are done for us:
    $("#lap").click(stopwatch.recordLap);
    $("#stop").click(stopwatch.stop);
    $("#reset").click(stopwatch.reset);
    $("#start").click(stopwatch.start);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

//prevents the clock from being sped up unnecessarily
var clockRunning = false;

//  Our stopwatch object.
var stopwatch = {

    time: 0,
    lap: 1,
    runTime: 0, // added a runTime variable

    reset: function () {

        stopwatch.time = 0;
        stopwatch.lap = 1;

        //  TODO: Change the "display" div to "00:00."
        $("#display").html("00:00");
        //ref laps
        $("#laps").text('');
    },

    start: function () {

        //  TODO: Use setInterval to start the count here and set the clock to running.
        if (!clockRunning) {
            intervalId = setInterval(stopwatch.count, 1000);
            clockRunning = true;
        }

    },
    stop: function () {

        //  TODO: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId)
        clockRunning = false;

    },

    recordLap: function () {

        //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
        if (clockRunning) {
            var currentTime = stopwatch.time; //declared a local variable to run stopwatch.time through
            var lapTime = currentTime - stopwatch.runTime; //declared another local variable that subtracts stopwatch.runTime from currentTime, which is fed into stopwatch.time

            if (lapTime !== 0) {
                var displayTime = stopwatch.timeConverter(lapTime); //created a local variable displayTime that runs the previous lapTime though the converter
                //        and save the result in a variable.
                $("#laps").append("<p>" + stopwatch.lap + ": " + displayTime + "</p>"); //records the recent lap time (lap# + the time) by appending it to the laps element
                //  TODO: Add the current lap and time to the "laps" div.
                stopwatch.lap++; //increments the lap# by 1
                stopwatch.runTime = currentTime; //sets runTime = to currentTime
            }
        }
        //  TODO: Increment lap by 1. Remember, we can't use "this" here.
    },
    count: function () {

        //  TODO: increment time by 1, remember we cant use "this" here.
        stopwatch.time++;

        //  TODO: Get the current time, pass that into the stopwatch.timeConverter function,
        //        and save the result in a variable.
        var currentTime = stopwatch.timeConverter(stopwatch.time);
        //  TODO: Use the variable you just created to show the converted time in the "display" div.
        $("#display").text(currentTime);
    },

    //  THIS FUNCTION IS DONE FOR US!
    //  We do not need to touch it.

    timeConverter: function (t) {

        //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }

        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
};

/* THIS IS IF WE WANT TO ADD HUNDREDTHS OF A SECOND

 //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).

  var minutes = Math.floor(t / 6000);

  var seconds = t - (minutes * 6000);

  var hundredths = t - (minutes * 600000);

  var seconds = seconds.toString();

  while(seconds.length <4) {
    seconds = "0" + seconds
   }

 /* if (seconds < 1) {

  seconds = "00" + seconds;

}

  if (seconds < 10) {

  seconds = "0" + seconds;

} 


if (minutes === 0) {

    minutes = "00";

}




else if (minutes < 10) {

    minutes = "0" + minutes;

}




return minutes + ":" + seconds.slice(0, 2) + ":" + seconds.slice(2, 4);

}

}; */