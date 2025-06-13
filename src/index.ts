import './styles/main.scss'
import { gsap } from 'gsap';

const introElement = document.querySelector('.intro') as HTMLElement | null;
const introHeaderElements = introElement?.querySelectorAll('.intro__header-line');
const introSloganElement = introElement?.querySelector('.intro__slogan') as HTMLElement | null;
const headerElement = document.querySelector('.header') as HTMLElement | null;
const advantagesElement = document.querySelector('.advantages') as HTMLElement | null;
const advantagesHeaderElements = advantagesElement?.querySelectorAll('.advantages__header-line');
const advantagesTextElement = advantagesElement?.querySelector('.advantages__text-wrapper') as HTMLElement | null;
const supportElement = document.querySelector('.support') as HTMLElement | null;
const supportHeaderElements = supportElement?.querySelectorAll('.support__header-line');
const supportTextElement = supportElement?.querySelector('.support__text') as HTMLElement | null;
const logoIconElement = headerElement?.querySelector('.logo-image__icon') as HTMLElement | null;
const logoTextElement = headerElement?.querySelector('.logo-text') as HTMLElement | null;
const menuLinkElements = headerElement?.querySelectorAll('.menu__link');
const buttonToggleElement = headerElement?.querySelector('.button-toggle') as HTMLElement | null;

window.onload = () => {
  if (!introHeaderElements) return;

  gsap.fromTo(introHeaderElements,
    { y: "100%" },
    { duration: 1, delay: 0.5, y: 0, ease: "power2.out" },
  );

  if (!introSloganElement) return;

  gsap.from(introSloganElement,
    { duration: 1, delay: 0.5, y: "+=100%", opacity: 0, ease: "power2.out" },
  );
};

if (headerElement && introElement) {
  window.addEventListener('scroll', function () {
    const opacityFactor = Math.min(window.pageYOffset / (introElement.clientHeight - headerElement.clientHeight), 1);
    introElement.style.opacity = `${1 - opacityFactor}`;
  });
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

const observerOptions: IntersectionObserverInit = {
  root: null,
  threshold: 1.0,
};

const advantagesObserverCb: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting && advantagesHeaderElements && advantagesTextElement) {
      gsap.fromTo(advantagesHeaderElements,
        { y: "100%" },
        { duration: 1, y: 0, ease: "power2.out" },
      );

      gsap.fromTo(advantagesTextElement,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 0.8, duration: 1, ease: 'power2.out' },
      );

      advantagesObserver.unobserve(entry.target);
    }
  });
};

const advantagesObserver = new IntersectionObserver(advantagesObserverCb, observerOptions);

if (advantagesElement) advantagesObserver.observe(advantagesElement);

const supportObserverCb: IntersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
  entries.forEach((entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting && supportHeaderElements && supportTextElement) {
      gsap.fromTo(supportHeaderElements,
        { y: "100%" },
        { duration: 1, delay: 0.5, y: 0, ease: "power2.out" },
      );

      gsap.fromTo(supportTextElement,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 0.8, duration: 1, delay: 0.5, ease: 'power2.out' }
      );

      entry.target.classList.add('support--img');

      supportObserver.unobserve(entry.target);
    }
  });
};

const supportObserver = new IntersectionObserver(supportObserverCb, observerOptions);

if (supportElement) supportObserver.observe(supportElement);
