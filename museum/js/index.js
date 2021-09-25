const rangeAll = document.querySelectorAll('.video__range');
function changeRange(i) {
  let value = rangeAll[i].value;
  rangeAll[i].style.cssText = `background: -webkit-linear-gradient(left, #710707 0%, #710707 ${value}%, #C4C4C4 ${value}%, #C4C4C4 100%);`
}
rangeAll.forEach((item, i) => {
  item.addEventListener('input', () => {
    changeRange(i);
  });
});