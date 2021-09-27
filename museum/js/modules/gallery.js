const wrapper = document.querySelector('.gallery__wrapper');
let imgArr = [];
for (let i = 1; i <= 15; i++) {
  imgArr.push(`<img class="gallery__img" src="assets/img/gallery/galery${i}.jpg" alt="picture"></img>`);
}
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
  return array;
}
shuffle(imgArr);
imgArr.map((elem) => {
  wrapper.innerHTML += elem;
});