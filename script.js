// ===== SCROLL ANIMATION =======

const target = document.querySelectorAll("[data-anime]");
const animationClass = "animate";

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * 3) / 4;
  console.log("target", target);
  target.forEach(function (element) {
    if (windowTop > element.offsetTop) {
      console.log("here");
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
    console.log("element", element.offsetTop);
  });
}

window.addEventListener("scroll", function () {
  animeScroll();
});

// ===== MAIN BANNER TEXT ANIMATIONS =======

const titulo = document.querySelector("h1");
console.log("title", titulo);
