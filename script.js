const navbarMobile = document.getElementById("hiddenNav");
const btnNav = document.getElementById("btnNav");

btnNav.addEventListener("click", () => {
  btnNav.classList.toggle("active");
  
  const isOpen = navbarMobile.classList.contains("opacity-100");

  if (isOpen) {
    navbarMobile.classList.remove("opacity-100");
    navbarMobile.classList.add("opacity-0", "pointer-events-none");
  } else {
    navbarMobile.classList.remove("pointer-events-none");
    
    requestAnimationFrame(() => {
      navbarMobile.classList.remove("opacity-0");
      navbarMobile.classList.add("opacity-100");
    });
  }
});