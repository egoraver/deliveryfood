const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".modal-close");
const closeButton = document.querySelector(".button-cancel");

cartButton.addEventListener('click', function (event) {
  modal.classList.add("is-open");
});
close.addEventListener('click', function (event) {
  modal.classList.remove("is-open");
});
closeButton.addEventListener('click', function (event) {
  modal.classList.remove("is-open");
});


new WOW().init();
