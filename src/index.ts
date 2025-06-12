import './styles/main.scss'
import { gsap } from 'gsap';

const introElement = document.querySelector('.intro') as HTMLElement | null;
const introSloganElement = introElement?.querySelector('.intro__slogan') as HTMLElement | null;
const introHeaderElement = introElement?.querySelectorAll('.intro__header-line');
const headerElement = document.querySelector('.header') as HTMLElement | null;
const advantagesElement = document.querySelector('.advantages') as HTMLElement | null;
const logoIconElement = headerElement?.querySelector('.logo-image__icon') as HTMLElement | null;
const logoTextElement = headerElement?.querySelector('.logo-text') as HTMLElement | null;
const menuLinkElements = headerElement?.querySelectorAll('.menu__link');
const buttonToggleElement = headerElement?.querySelector('.button-toggle') as HTMLElement | null;

window.onload = () => {
  if (!introSloganElement) return;

  gsap.from(introSloganElement,
    {
      duration: 1,
      y: "+=100%",
      opacity: 0,
      ease: "power2.out",
      delay: 0.2,
    }
  );

  if (!introHeaderElement) return;

  gsap.fromTo(introHeaderElement,
    {
      y: "100%"
    },
    {
      duration: 1,
      y: 0,
      ease: "power2.out",
      delay: 0.2,
    },
  );
};

if (headerElement && introElement && advantagesElement) {
  window.addEventListener('scroll', function () {
    if (
      window.pageYOffset >= (introElement.clientHeight - (headerElement.clientHeight / 2)) &&
      window.pageYOffset <= (introElement.clientHeight + advantagesElement.clientHeight - (headerElement.clientHeight / 2))
    ) {
      logoIconElement?.classList.add('logo-image__icon--dark');
      logoTextElement?.classList.add('logo-text--dark');
      menuLinkElements?.forEach((link) => link.classList.add('menu__link--dark'));
      buttonToggleElement?.classList.add('button-toggle--dark');
    } else {
      logoIconElement?.classList.remove('logo-image__icon--dark');
      logoTextElement?.classList.remove('logo-text--dark');
      menuLinkElements?.forEach((link) => link.classList.remove('menu__link--dark'));
      buttonToggleElement?.classList.remove('button-toggle--dark');
      }
  });
};
