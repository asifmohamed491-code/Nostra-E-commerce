// Top offer Bar closing
var close = document.querySelector(".close")
var topBar = document.querySelector(".top-close")

close.addEventListener("click", function () {
  topBar.style.display = "none"
})
// Mobile menu bar
var sidenav = document.querySelector(".sidenav")
var close = document.querySelector(".closing")
var menu = document.querySelector(".mobile-menu")

menu.addEventListener("click", function () {
  sidenav.style.left = 0
})
close.addEventListener("click", function () {
  sidenav.style.left = "-50%"
})


// Hero section Slide
const hero = document.querySelector(".hero");
const nextBtn = document.querySelector(".arrow-right");
const prevBtn = document.querySelector(".arrow-left");

const images = [
  "./images/slide1.jpg",
  "./images/slide2.jpg",
  "./images/slide3.png"
];

let index = 0;

// background update function
function updateBackground() {
  hero.style.backgroundImage = `url('${images[index]}')`;
}

// Right arrow → next image
nextBtn.addEventListener("click", () => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  updateBackground();
});

// Left arrow → previous image
prevBtn.addEventListener("click", () => {
  index--;
  if (index < 0) {
    index = images.length - 1;
  }
  updateBackground();
});

// Optional: auto change every 5 sec
setInterval(() => {
  index++;
  if (index >= images.length) {
    index = 0;
  }
  updateBackground();
}, 5000);


// Nav-bar-clicking
var home = document.getElementById("home")
var newarrival = document.getElementById("newarrival")
var mostwanted = document.getElementById("wanted")
home.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("home-section").scrollIntoView({
    behavior: "smooth"
  });
});

// NEW ARRIVAL click → new arrival section scroll
newarrival.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("newarrival-section").scrollIntoView({
    behavior: "smooth"
  });
});

// MOST WANTED click → most wanted section scroll
mostwanted.addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("mostwanted-section").scrollIntoView({
    behavior: "smooth"
  });
});

// mobile side navbar click functionality
