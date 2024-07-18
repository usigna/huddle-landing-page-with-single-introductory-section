function handleFirstTab(e) {
  if (e.key === 'Tab') {
    document.body.classList.add('user-is-tabbing');
    window.removeEventListener('keydown', handleFirstTab);
  }
};

function showAnimations() {
  let tl = gsap.timeline();

  tl.from('.header', {duration: .3, opacity: 0, y: 50, ease: 'back.out(1.7)'});
  tl.from('#desktop', {duration: .3, opacity: 0, y: 50, ease: 'back.out(1.7)'});
  tl.from('.desktop__item', {duration: .3, opacity: 0, y: 50, ease: 'back.out(1.7)', stagger: .3});
  tl.from('#mobile', {duration: .3, opacity: 0, y: 50, ease: 'back.out(1.7)'});
  tl.from('.mobile__item', {duration: .3, opacity: 0, y: 50, ease: 'back.out(1.7)', stagger: .3});
  tl.from('.title', {duration: .3, opacity: 0, y: 50, ease: 'back.out(1.7)'});
  tl.from('.text', {duration: .3, opacity: 0, y: 50, ease: 'back.out(1.7)'});
  tl.from('.btn', {duration: .3, opacity: 0, y: 50, ease: 'back.out(1.7)'});
  tl.from('.social-media__link', {duration: .3, opacity: 0, y: 50, ease: 'back.out(1.7)', stagger: .3});
  tl.from('.attribution', {duration: .3, opacity: 0, y: 50, ease: 'back.out(1.7)'});
}

const init = function() {
  window.addEventListener('keydown', handleFirstTab);
  showAnimations();
};

document.addEventListener('DOMContentLoaded', init);