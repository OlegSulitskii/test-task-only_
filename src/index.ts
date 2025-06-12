import './styles/main.scss'
import { gsap } from 'gsap';

const animatedReady = document.getElementById('animatedReady');

console.log('Hello, every!');

window.onload = () => {
  if (!animatedReady) return;

  gsap.from(animatedReady, {
    duration: 2,  // Длительность анимации
    y: "+=100%",  // Смещаемся сверху вниз
    opacity: 0,   // Исходная прозрачность
    ease: "power2.out",  // Тип easing
    delay: 0.5,    // Пауза перед началом
  });
};

window.addEventListener('scroll', function () {
  console.log('Страница прокручена на ' + window.pageYOffset + ' px');
});
