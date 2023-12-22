let timer;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        const timerElement = document.getElementById("timer");
        const initialTime = 1.5 * 60 * 60; // 1 jam dalam detik
        let currentTime = initialTime;

        timer = setInterval(function() {
            const hours = Math.floor(currentTime / 3600);
            const minutes = Math.floor((currentTime % 3600) / 60);
            const seconds = currentTime % 60;

            const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
            timerElement.textContent = formattedTime;
            currentTime--;

            if (currentTime < 0) {
                clearInterval(timer);
                timerElement.textContent = "Waktu Habis!";
                isRunning = false;
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    document.getElementById("timer").textContent = "01:30:00";
}
