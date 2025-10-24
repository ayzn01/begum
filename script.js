async function initCountdown(targetTimeStr, buttonId) {
    const countdownEl = document.getElementById("countdown");
    const enterBtn = document.getElementById(buttonId);

    async function getLondonTime() {
        try {
            const res = await fetch("http://worldtimeapi.org/api/timezone/Europe/London");
            const data = await res.json();
            return new Date(data.datetime);
        } catch (err) {
            return new Date(); // fallback to local
        }
    }

    async function updateCountdown() {
        const now = await getLondonTime();
        const targetTime = new Date(targetTimeStr);
        let diff = targetTime - now;

        if (diff <= 0) {
            diff = 0;
            enterBtn.disabled = false;
        }

        const hours = String(Math.floor(diff / (1000*60*60))).padStart(2, '0');
        const mins = String(Math.floor((diff % (1000*60*60))/(1000*60))).padStart(2, '0');
        const secs = String(Math.floor((diff % (1000*60))/1000)).padStart(2,'0');

        countdownEl.textContent = `${hours} : ${mins} : ${secs}`;
    }

    enterBtn.disabled = true;
    enterBtn.addEventListener("click", () => {
        if (!enterBtn.disabled) {
            window.location.href = "snoopy.html";
        }
    });

    updateCountdown();
    setInterval(updateCountdown, 200); // updates every 0.2s
}
