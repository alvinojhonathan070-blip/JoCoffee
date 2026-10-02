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

//searchbar
const search = document.getElementById("search");
const tabs = document.querySelectorAll(".tab");
const items = document.querySelectorAll(".menu-item");
const empty = document.getElementById("empty");
let category = "all";

function applyFilter() {
  const keyword = search.value.toLowerCase().trim();
  let found = 0;

  items.forEach((item) => {
    const matchCategory = category === "all" || item.dataset.category === category;
    const matchText = item.textContent.toLowerCase().includes(keyword);
    const show = matchCategory && matchText;
    item.classList.toggle("hidden", !show);
    if (show) found++;
  });

  empty.classList.toggle("hidden", found > 0);
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    category = tab.dataset.filter;
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle("bg-[#0B38A9]", active);
      t.classList.toggle("text-white", active);
      t.classList.toggle("bg-white", !active);
      t.classList.toggle("text-[#0B38A9]", !active);
    });
    applyFilter();
  });
});

search.addEventListener("input", applyFilter);