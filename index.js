let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let countdownEl = document.getElementById("countdown");
let count = 0;
let clickCount = 0;
let countdown = 10;
let countdownInterval;

countdownEl.textContent = `Countdown: ${countdown}s`;

function startCountdown() {
    countdownInterval = setInterval(function() {
        countdown -= 1;
        countdownEl.textContent = `Countdown: ${countdown}s`;

        if (countdown <= 0) {
            save();
        }
    }, 1000);
}

function resetCountdown() {
    clickCount = 0;
    clearInterval(countdownInterval);
    countdown = 10;
    countdownEl.textContent = `Countdown: ${countdown}s`;
}

function increment() {
    count += 1;
    clickCount += 1;
    countEl.textContent = count;

    if (clickCount == 1){
        startCountdown();
    }

    if (countdown <= 0 || !countdownInterval) {
        resetCountdown();
    }
}

function save() {
    let countStr = `${clickCount} - `;
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    alert(`You clicked ${clickCount} times!`)
    resetCountdown();
}