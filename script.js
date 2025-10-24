// Countdown logic
function startCountdown(targetDate, countdownEl, enterBtnId) {
    const enterBtn = document.getElementById(enterBtnId);

    function updateCountdown() {
        const now = new Date();
        const distance = targetDate - now;

        if (distance <= 0) {
            countdownEl.textContent = "00 : 00 : 00";
            enterBtn.disabled = false;
            clearInterval(interval);
            return;
        }

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownEl.textContent = `${String(hours).padStart(2,'0')} : ${String(minutes).padStart(2,'0')} : ${String(seconds).padStart(2,'0')}`;
    }

    updateCountdown(); // initial call
    const interval = setInterval(updateCountdown, 250); // update frequently for smoothness
}
