// JavaScript mínimo para controle do player
document.addEventListener('DOMContentLoaded', function() {
    const player = document.querySelector('.player-container');
    const toggleBtn = document.querySelector('.player-toggle');
    const toggleText = toggleBtn.querySelector('.toggle-text');
    const toggleIcon = toggleBtn.querySelector('i');
    const audio = document.querySelector('audio');
    
    // Estado inicial
    player.classList.remove('collapsed');
    toggleBtn.setAttribute('aria-expanded', 'true');
    toggleText.textContent = 'Recolher';
    
    // Controle do toggle
    toggleBtn.addEventListener('click', function() {
        const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
        
        player.classList.toggle('collapsed', isExpanded);
        toggleBtn.setAttribute('aria-expanded', String(!isExpanded));
        
        if (isExpanded) {
            toggleText.textContent = 'Mostrar';
            toggleIcon.style.transform = 'rotate(180deg)';
        } else {
            toggleText.textContent = 'Recolher';
            toggleIcon.style.transform = 'rotate(0deg)';
        }
    });
    
    // Controle de play/pause para equalizer
    if (audio) {
        audio.addEventListener('play', function() {
            player.classList.add('is-playing');
        });
        
        audio.addEventListener('pause', function() {
            player.classList.remove('is-playing');
        });
    }
});