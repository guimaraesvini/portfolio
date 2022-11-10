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

function typeWriter(element){
  const textArray = element.innerHTML.split('');
  element.innerHTML = ''
  textArray.forEach((letra, i) => {
    setTimeout(() => element.innerHTML += letra, 180 * i)
  })
}

const titulo = document.querySelector(".iam");
typeWriter(titulo)


// ===== Toogle menu mobile =======
// $(document).ready(function(){
//   $('.nav-link').on('click', function(){
//     $('.navbar-collapse').toggle();
//   })
// })

// ===== ToolTIp =======
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

