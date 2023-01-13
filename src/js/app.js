import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
const main = document.querySelector(".main");
const imgSrc = "path/to/image.jpg";

main.innerHTML = `<div class="image">
<img src="${imgSrc}">
</div>`;

const image = document.querySelector(".image");
image.addEventListener("click", () => {
  image.style.transform = "scale(2)";
});
