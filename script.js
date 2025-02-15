document.addEventListener('DOMContentLoaded', function () {
    const cake = document.querySelector('.cake');
    const candles = document.querySelectorAll('.candle');
    const invitation = document.querySelector('.invitation');
    const music = document.getElementById('music');

    // Simula el soplo para apagar las velas
    setTimeout(() => {
        // Apaga las velas
        candles.forEach(candle => {
            candle.style.animation = 'none';
            candle.style.opacity = '0';
            candle.style.transition = 'opacity 1s ease-in-out';
        });

        // Reduce el tamaño de la torta
        cake.classList.add('shrink');

        // Muestra la invitación
        setTimeout(() => {
            invitation.classList.remove('hidden');
            invitation.classList.add('show');

            // Lanza el confeti
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
            });

            // Reproduce la música a partir del segundo 16
            music.currentTime = 16; // Establece el tiempo de inicio en 16 segundos
            music.play();
        }, 1000); // Espera 1 segundo antes de mostrar la invitación
    }, 3000); // Sopla después de 3 segundos
});