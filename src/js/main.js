var title = document.querySelector(".l-title-background");
function changeColor() {
  title.classList.toggle("l-title-is-active");
  title.classList.toggle("is-active");
}

title.addEventListener("click", changeColor);

var onion = document.querySelector(".product-card.product-onion");

var informationsOnion = document.querySelector(
  ".product-informations.product-informations-onion"
);

function onionChange() {
  onion.classList.toggle("product-onion-is-active");
  informationsOnion.style.display = "block";
}
onion.addEventListener("click", onionChange);

var herby = document.querySelector(".product-card.product-herby");

var informationsHerby = document.querySelector(
  ".product-informations.product-informations-herby"
);

function herbyChange() {
  informationsHerby.style.display = "block";
}
herby.addEventListener("click", herbyChange);

var classic = document.querySelector(".product-card.product-classic");

var informationsClassic = document.querySelector(
  ".product-informations.product-informations-classic"
);
function classicChange() {
  classic.classList.toggle("product-classic-is-active");
  informationsClassic.style.display = "block";
}

classic.addEventListener("click", classicChange);
