const startButton = document.getElementById("start");
const timerElement = document.getElementById("pomodoro-time");
let running = false;
let timer;
const timeArray = timerElement.textContent.split(":");
let minutes = parseInt(timeArray[0]);
let seconds = parseInt(timeArray[1]);



const formattedMinutes = () => {
  if (minutes < 10) {
    return '0' + minutes;
  } else {
    return minutes;
  }
};

const formattedSeconds = () => {
  if (seconds < 10) {
    return '0' + seconds;
  } else {
    return seconds;
  }
};


function startTimer() {
    running = true;
    startButton.textContent = 'Stop';
    timer = setInterval(() => {
        seconds--;
      
        if (seconds < 0) {
            minutes--;
            seconds = 59;
        }
    
        if (minutes === 0 && seconds === 0) {
            clearInterval(timer);
            timerElement.textContent = "25:00";
            startButton.textContent = 'Start';
            running = false;
            minutes = 25;
            seconds = 0;
        } else {
            timerElement.textContent = formattedMinutes() + ":" + formattedSeconds();
        }
    }, 10);
}


function stopTimer() {
    running = false;
    clearInterval(timer);
    startButton.textContent = 'Start';
}


startButton.addEventListener('click', () => {
    if (running) {
        stopTimer();
    } else {
        startTimer();
    }
});