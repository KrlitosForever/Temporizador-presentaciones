let totalTime = 900; // Tiempo total en segundos
let remainingTime = totalTime;
let timerElement = document.getElementById('timer');

function updateBackgroundColor() {
    let elapsed = totalTime - remainingTime;
    let fraction = elapsed / totalTime;

    if (fraction <= 1/3) {
        document.body.style.backgroundColor = 'green';
        timerElement.style.color = 'white';
    } else if (fraction <= 2/3) {
        document.body.style.backgroundColor = 'yellow';
        timerElement.style.color = 'black';
    } else {
        document.body.style.backgroundColor = 'red';
        timerElement.style.color = 'white';
    }
}

function formatTime(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    let timerInterval = setInterval(() => {
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
        } else {
            remainingTime--;
            timerElement.textContent = formatTime(remainingTime);
            updateBackgroundColor();
        }
    }, 1000);
}

timerElement.textContent = formatTime(remainingTime);
startTimer();
