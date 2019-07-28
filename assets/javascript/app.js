
var correctAnswersNo = 0;
var wrongAnswersNo = 0; 

if (value=true) {
  getElementByValue().true;
  correctAnswersNo++;
} else {
  getElementByValue().false;
  wrongAnswersNo++;
};






//  This code will run as soon as the page loads.
window.onload = function() {
    $("#start").on("click", start);
  };
  
  //  Variable that will hold our setInterval that runs the stopwatch
  var intervalId;
  
  // prevents the clock from being sped up unnecessarily
  var clockRunning = false;
  var time = 10;
  var lap = 1;
  
  function reset() {
  
    time = 0;
    lap = 1;
  
    //  Change the "display" div to "00:00."
    $("#display").text("00:00")
  
  }
  
  function start() {
  
    //  setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      clockRunning=true;
      intervalId = setInterval(count, 1000)
    }
  
  }
  function stop() {
  
    //  clearInterval to stop the count here and set the clock to not be running.
   if (clockRunning) {
    clearInterval(intervalId);
    clockRunning=false
  }
}


function count() {
  
  //  decrement time by 1
  time--;
  

  //  Get the current time, pass that into the timeConverter function,
  //        and save the result in a variable.
  var timeResult=timeConverter(time) 

  //  Use the variable you just created to show the converted time in the "display" div.
  $("#display").text(timeResult)

  if (time===0 || on("click", submit)) { 
    stop (time); 
    document.write(correctAnswersNo , wrongAnswersNo);
  
  } 
}

if (correctAnswersNo>wrongAnswersNo){
  document.write("CONGRAT WINNERS!");
}else {
  document.write("HARD LUCK!!!");
}
  
  function timeConverter(t) {
  
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
  
  

  // rightAnswers = ["Pennsylvania", "Greenland", "Amazon", "Pacific", "8,000 miles", "Daintree Forest north of Cairns, Australia", "Liverpool, Glasgow, Newcastle and London", "Madrid", "Czech Republic", "Birkenhead"]
