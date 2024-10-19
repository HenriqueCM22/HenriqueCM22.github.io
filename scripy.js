document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('musicaAudio');

    // Função para reiniciar a música quando a seção for visível
    function reiniciarMusica() {
        if (audio.paused) {
            audio.currentTime = 0; // Reinicia a música
            audio.play(); // Toca a música
        }
    }

    // Adiciona um evento de scroll para reiniciar a música
    window.addEventListener('scroll', function() {
        const sectionMusica = document.getElementById('musica');
        const rect = sectionMusica.getBoundingClientRect();

        // Verifica se a seção está visível na tela
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            reiniciarMusica();
        }
    });
});
