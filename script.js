// Typed.js Effect
const typed = new Typed("#typed", {
  strings: [
    "Full Stack Developer",
    "Problem Solver",
    "Tech Enthusiast",
    "Electrical Hobbyist"
  ],
  typeSpeed: 40,
  backSpeed: 30,
  loop: true
});

// ScrollReveal Animations
ScrollReveal().reveal('.hero-text', {
  delay: 300,
  distance: '60px',
  origin: 'top'
});

ScrollReveal().reveal('.section', {
  delay: 200,
  distance: '30px',
  origin: 'bottom',
  interval: 200
});

ScrollReveal().reveal('.project', {
  interval: 200,
  origin: 'bottom',
  distance: '20px'
});

// Scroll Progress Bar
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollPercent = (scrollTop / scrollHeight) * 100;
  document.getElementById("progress-bar").style.width = scrollPercent + "%";

  // Section Highlight
  document.querySelectorAll('.section').forEach(section => {
    const sectionTop = section.offsetTop - 100;
    const sectionBottom = sectionTop + section.offsetHeight;
    if (scrollTop >= sectionTop && scrollTop < sectionBottom) {
      section.classList.add('active-section');
    } else {
      section.classList.remove('active-section');
    }
  });
});

// Theme Toggle (Switch)
const themeSwitch = document.getElementById("theme-checkbox");
themeSwitch.addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});
