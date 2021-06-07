/*----------  toggle navigation  ----------*/
const navIcon = document.querySelector(".nav__icon").firstElementChild;
const navMenu = document.querySelector(".nav__menu--sm");

navIcon.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (navIcon.classList.contains("fa-bars")) {
    navIcon.classList.remove("fa-bars");
    navIcon.classList.add("fa-times");
    navMenu.style.display = "grid";
  } else {
    navIcon.classList.remove("fa-times");
    navIcon.classList.add("fa-bars");
    navMenu.style.display = "none";
  }
}

window.addEventListener("resize", closeMenu);
function closeMenu() {
  if (this.innerWidth >= 1000) {
    navIcon.classList.remove("fa-times");
    navIcon.classList.add("fa-bars");
    navMenu.style.display = "none";
  }
}
