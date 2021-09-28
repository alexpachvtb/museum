const showForm = document.querySelector('.tickets__buy-btn'),
      form = document.querySelector('.form'),
      closeForm = form.querySelector('.form__close'),
      overlayForm = form.querySelector('.form__overlay');

showForm.addEventListener('click', () => {
  form.classList.add('form_active');
})

closeForm.addEventListener('click', () => {
  form.classList.remove('form_active');
});

overlayForm.addEventListener('click', () => {
  form.classList.remove('form_active');
});