window.addEventListener("load", () => {
  const loader = document.getElementById("loadingScreen");
  loader.style.display = "none"
})

const navbarMobile = document.getElementById("hiddenNav");
const btnNav = document.getElementById("btnNav");
const listNav = document.getElementById("listNav");

function openNav() {
  btnNav.classList.add("active");
  navbarMobile.classList.remove("pointer-events-none");

  requestAnimationFrame(() => {
    navbarMobile.classList.remove("opacity-0");
    navbarMobile.classList.add("opacity-100");
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

//searchbarMENU
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

  empty.classList.toggle("hidden" , found > 0);
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

search.addEventListener("input", applyFilter());

// searchbarLOCATION
const searchLoc = document.getElementById("searchLOC");
const locTabs = document.querySelectorAll(".tab-loc");
const locCard = document.querySelectorAll(".location-card");
const emptyLoc = document.getElementById("emptyLoc");

let currentCity = "all";

function filterLocation() {
  const keyword = searchLoc.value.trim();
  const regex = new RegExp(keyword, "i");
  let found = 0;

  locCard.forEach((card) => {
    const city = card.dataset.city || "";
    const branchName = card.querySelector("h3")?.innerText || "";
    const matchSearch = regex.test(city) || regex.test(branchName);
    const matchTab = currentCity === "all" || currentCity === city;

    if (matchSearch && matchTab) {
      card.classList.remove("hidden");
      found++;
    } else {
      card.classList.add("hidden");
    }
  });

  if (emptyLoc) {
    if (found > 0) {
      emptyLoc.classList.add("hidden");
    } else {
      emptyLoc.classList.remove("hidden");
    }
  }
}

searchLoc.addEventListener("input", applyFilter);

locTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    currentCity = tab.dataset.city || "all";

    locTabs.forEach((t) => {
      t.classList.add("bg-white", "text-slate-500");
      t.classList.remove("bg-blue-700", "text-white");
    });
    tab.classList.remove("bg-white", "text-slate-500");
    tab.classList.add("bg-blue-700", "text-white");

    filterLocation();
  });
});

const form = document.getElementById("contactForm");
const btnSubmit = document.getElementById("btnSubmit")
form.addEventListener("submit", (event) => {
  event.preventDefault(); 
  form.reset()
  btnSubmit.innerText = "Message Sent!"
});