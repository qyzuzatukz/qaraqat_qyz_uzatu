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