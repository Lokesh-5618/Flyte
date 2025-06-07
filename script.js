document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const mobileNav = document.getElementById("mobileNav");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("active");
  });

  document.querySelectorAll(".mobile-links div, .mobile-links a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("active");
    });
  });
});
