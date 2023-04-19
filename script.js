const navbar = document.querySelector(".navbar");
const navbarOffsetTop = navbar.offsetTop;
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  if (window.scrollY >= navbarOffsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});

window.addEventListener("resize", () => {
  window.location.reload();
});
