// Reiniciar animaciones de forma limpia
function replay() {
  const app = document.getElementById('app');
  const content = app.innerHTML;
  app.innerHTML = '';
  app.innerHTML = content;
}

// Efecto interactivo al hacer clic o tap
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  
  app.addEventListener('click', (e) => {
    // Si da clic en un botón, no genera el corazón flotante
    if (e.target.tagName === 'BUTTON' || e.target.closest('button')) return;

    const icons = ['🌸', '❤️', '✨', '💖'];
    const randomIcon = icons[Math.floor(Math.random() * icons.length)];

    const heart = document.createElement('div');
    heart.className = 'click-heart';
    heart.innerHTML = randomIcon;
    heart.style.left = `${e.clientX - 12}px`;
    heart.style.top = `${e.clientY - 12}px`;

    app.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 1200);
  });
});
