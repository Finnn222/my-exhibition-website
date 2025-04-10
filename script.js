// Проста анімація при завантаженні сторінки
document.addEventListener('DOMContentLoaded', () => {
  const heroText = document.querySelector('.hero-content h1');
  heroText.classList.add('fade-in');
});
