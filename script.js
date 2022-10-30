// ===== SCROLL ANIMATION =======

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

window.addEventListener("scroll", function () {
  animeScroll();
});

// ===== MAIN BANNER TEXT ANIMATIONS =======

const titulo = document.querySelector("h1");
console.log("title", titulo);
