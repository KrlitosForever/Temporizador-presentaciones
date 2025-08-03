// script.js con Pop-up de Configuración

let totalTime = 900; // Tiempo por defecto: 15 minutos (900 segundos)
let remainingTime = totalTime;
let timerElement = document.getElementById('timer');

// Mostrar pop-up para configurar el tiempo
function showTimePopup() {
    let minutes = prompt("Ingresa la duración en minutos (ej. 15 para 15 minutos):", "15");
    let seconds = parseInt(minutes) * 60;
    
    if (!isNaN(seconds) && seconds > 0) {
        totalTime = seconds;
        remainingTime = totalTime;
        timerElement.textContent = formatTime(remainingTime);
    }
}

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

// Mostrar pop-up al cargar la página
showTimePopup();
timerElement.textContent = formatTime(remainingTime);
startTimer();