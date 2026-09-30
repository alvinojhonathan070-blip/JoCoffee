const navbarMobile = document.getElementById("hiddenNav");
const btnNav = document.getElementById("btnNav");
const listNav = document.getElementById("listNav");

function openNav() {
  btnNav.classList.add("active");
  navbarMobile.classList.remove("pointer-events-none");

  requestAnimationFrame(() => {
    navbarMobile.classList.remove("opacity-0");
    navbarMobile.classList.add("opacity-100");
    navbarMobile.style.animation = "navHidden2 linear";
    navbarMobile.style.animationTimeline = "scroll()";
    navbarMobile.style.animationRange = "0% 100%";
    navbarMobile.style.animationFillMode = "forwards";
  });
}

function closeNav() {
  btnNav.classList.remove("active");
  navbarMobile.style.removeProperty("animation");
  navbarMobile.style.removeProperty("animation-timeline");
  navbarMobile.style.removeProperty("animation-range");
  navbarMobile.style.removeProperty("animation-fill-mode");
  navbarMobile.classList.remove("opacity-100");
  navbarMobile.classList.add("opacity-0", "pointer-events-none");
}

btnNav.addEventListener("click", () => {
  const isOpen = navbarMobile.classList.contains("opacity-100");
  isOpen ? closeNav() : openNav();
});

listNav.addEventListener("click", (e) => {
  if (e.target.closest("a")) closeNav();
});