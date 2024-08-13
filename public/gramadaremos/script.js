document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.progress-bar');
    const progressPercent = document.getElementById('progress-percent');
    const countdownElement = document.getElementById('countdown');
    const completionMessage = document.querySelector('.completion-message');
    const busImage = document.querySelector('.progress-image.middle'); // Seleciona a imagem do ônibus

    const startDate = new Date('2024-07-05T00:00:00');
    const endDate = new Date('2024-08-16T20:00:00');

    function updateProgressBar() {
        const now = new Date();
        const totalDuration = endDate - startDate;
        const elapsedDuration = now - startDate;
        const progress = Math.min(100, (elapsedDuration / totalDuration) * 100);
        progressBar.style.width = progress + '%';
        progressPercent.textContent = Math.round(progress) + '%';

        // Atualiza a posição do ônibus
        const progressBarWidth = progressBar.offsetWidth;
        busImage.style.left = progress + '%';
    }

    function updateCountdown() {
        const now = new Date();
        const timeRemaining = endDate - now;

        if (timeRemaining < 0) {
            countdownElement.innerHTML = '<span class="completion-message">GRAMADOU!</span>';
            return;
        }

        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos`;
    }

    updateProgressBar();
    updateCountdown();
    setInterval(() => {
        updateProgressBar();
        updateCountdown();
    }, 1000); // Atualiza a contagem regressiva e barra de progresso a cada segundo
});
