const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.welcome__menu'),
      content = document.querySelector('.welcome__text');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger__close');
  menu.classList.toggle('welcome__menu-active');
  content.classList.toggle('hidden');
})

console.log('hello');