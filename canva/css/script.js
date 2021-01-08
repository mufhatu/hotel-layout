onst hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-responsive");
const links = document.querySelectorAll(".nav-responsive ul li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach(link => {
    link.classList.toggle("fade");
  });
});
