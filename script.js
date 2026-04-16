// Loader
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hidden");
  }, 1000);
});

// Auto year
document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("themeToggle");
const icon = document.getElementById("themeIcon");
const logo = document.getElementById("mainLogo");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  icon.src = "light.png";
  logo.src = "logo_light1.png";
} else {
  icon.src = "dark.png";
  logo.src = "logo_light1.png";
}

// Reveal on scroll
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add("visible");
  });
}, { threshold: 0.1 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// Navbar scroll shadow
window.addEventListener("scroll", () => {
  const nav = document.getElementById("navbar");
  nav.classList.toggle("scrolled", window.scrollY > 10);
});

// Tambah di script.js — Active nav link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.getAttribute("id");
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) link.classList.add("active");
  });
});

// Toggle theme
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    icon.src = "light.png";
    logo.src = "logo_light1.png";
  } else {
    localStorage.setItem("theme", "light");
    icon.src = "dark.png";
    logo.src = "logo_dark1.png";
  }
});