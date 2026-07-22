document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    const musicBtn = document.getElementById('music-btn');

    function toggleMusic() {
        if (music.paused) {
            music.play();
            musicBtn.classList.remove('paused');
            musicBtn.classList.add('playing');
        } else {
            music.pause();
            musicBtn.classList.remove('playing');
            musicBtn.classList.add('paused');
        }
    }

    musicBtn.addEventListener('click', toggleMusic);

    // Автозапуск после первого клика по экрану (требование современных браузеров)
    function autoPlay() {
        if (music.paused) {
            music.play().then(() => {
                musicBtn.classList.add('playing');
                musicBtn.classList.remove('paused');
            }).catch(() => {});
        }
        document.removeEventListener('click', autoPlay);
        document.removeEventListener('touchstart', autoPlay);
    }

    document.addEventListener('click', autoPlay);
    document.addEventListener('touchstart', autoPlay);
    
    // Изначальное состояние кнопки
    musicBtn.classList.add('paused');
});







    function updateCountdown() {
        // Устанавливаем целевую дату: 26 июля 2026 года
        const targetDate = new Date("August 28, 2026 18:00:00").getTime();
        const now = new Date().getTime();
        const difference = targetDate - now;

        if (difference < 0) {
            document.querySelector(".timer-display").innerHTML = "<span class='timer-label' style='font-size: 1.2rem;'>Той басталды!</span>";
            return;
        }

        // Высчитываем дни, часы, минуты и секунды
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        // Подставляем значения в HTML с красивыми нулями впереди, если число меньше 10
        document.getElementById("days").innerText = days < 10 ? "0" + days : days;
        document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
        document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
        document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
    }

    // Запускаем каждую секунду
    setInterval(updateCountdown, 1000);
    // Первый запуск сразу, чтобы не ждать секунду до старта интервала
    updateCountdown();
