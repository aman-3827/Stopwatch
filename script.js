const timeDisplay = document.getElementById("time");
const startButton = document.getElementById("start-button");
const stopButton = document.getElementById("stop-button");
const resetButton = document.getElementById("reset-button");

let interval;
let running = false;
let hours = 0, minutes = 0, seconds = 0;

// Function to update the stopwatch display
function updateDisplay() {
    let displayHours = hours < 10 ? "0" + hours : hours;
    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;
    timeDisplay.innerText = `${displayHours}:${displayMinutes}:${displaySeconds}`;
}

// Function to start the stopwatch
function startClock() {
    if (!running) {
        interval = setInterval(() => {
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
                if (minutes === 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateDisplay();
        }, 1000);
        running = true;
    }
}

// Function to stop the stopwatch
function stopClock() {
    clearInterval(interval);
    running = false;
}

// Function to reset the stopwatch
function resetClock() {
    stopClock();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateDisplay();
}

// Event Listeners
startButton.addEventListener("click", startClock);
stopButton.addEventListener("click", stopClock);
resetButton.addEventListener("click", resetClock);

// Initialize display
updateDisplay();
