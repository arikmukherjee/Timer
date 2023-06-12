var timer;
var time = 0;

function startTimer() {
  if (!timer) {
    timer = setInterval(runTimer, 1000);
  }
}

function runTimer() {
  time++;
  var hours = Math.floor(time / 3600);
  var minutes = Math.floor((time % 3600) / 60);
  var seconds = time % 60;
  
  var formattedTime = formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);
  
  document.getElementById("countdown").textContent = formattedTime;
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  time = 0;
  document.getElementById("countdown").textContent = "00:00:00";
}
