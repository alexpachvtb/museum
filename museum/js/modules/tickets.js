const inputAll = document.querySelectorAll('.tickets__input');
let parent, inputValue;

inputAll.forEach(input => {
  input.addEventListener('click', e => {
    if (e.target && e.target.tagName == 'BUTTON') {
      parent = e.target.parentNode;
      inputValue = parent.querySelector('.tickets__amount-number');
      if (e.target.className == "tickets__amount-btn tickets__amount-btn-plus") {
        if (inputValue.value < 20) {
          inputValue.value = +inputValue.value + 1;
        }
      }
      if (e.target.className == "tickets__amount-btn tickets__amount-btn-minus") {
        if (inputValue.value > 0) {
          inputValue.value = +inputValue.value - 1;
        }
      }
    }
  });
});
