// Navbar elements:
const navbarMenu = document.querySelector("#menu");
const navbarCloseMenu = document.getElementById("close-menu");
const navbarOpenMenu = document.getElementById("open-menu");

// Project section elements:
const container = document.querySelector(".container");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const allProjects = document.querySelector(".all-projects");
const projects = document.querySelectorAll(".project");
const sliderBullets = document.querySelector(".slider-bullets");
const bullets = document.querySelectorAll(".bullet");

// An event to (disappear) the navbar menu when click the Xmark.
navbarCloseMenu.addEventListener("click", () => {
  navbarMenu.style.display = "none";
});

// An event to (appear) the navbar menu when click the Xmark.
navbarOpenMenu.addEventListener("click", () => {
  navbarMenu.style.display = "block";
});

let currentProjectIndex = 0;
let projectWidth = projects[0].offsetWidth;
let projectsLength = projects.length;

// To disable the left arrow in the beggining.
firstAndLastChecking();

// This function to update the active bullet:
function updateActiveBullet() {
  // Remove the current active class.
  bullets.forEach((bullet) => {
    bullet.classList.remove("active");
  });

  bullets[currentProjectIndex].classList.add("active");
}

function firstAndLastChecking() {
  if (currentProjectIndex == 0) {
    leftArrow.style.cursor = "not-allowed";
    leftArrow.style.opacity = "0.4";
  } else {
    leftArrow.style.cursor = "pointer";
    leftArrow.style.opacity = "1";
  }

  if (currentProjectIndex == projectsLength - 3) {
    rightArrow.style.cursor = "not-allowed";
    rightArrow.style.opacity = "0.4";
  } else {
    rightArrow.style.cursor = "pointer";
    rightArrow.style.opacity = "1";
  }
}

// Event listener for (left arrow).
leftArrow.addEventListener("click", () => {
  if (currentProjectIndex > 0) {
    currentProjectIndex--;
    allProjects.style.transform = `translateX(-${
      currentProjectIndex * projectWidth
    }px)`;
    updateActiveBullet();
    firstAndLastChecking();
  }
});

// Event listener for (right arrow).
rightArrow.addEventListener("click", () => {
  if (currentProjectIndex < projectsLength - 3) {
    currentProjectIndex++;
    allProjects.style.transform = `translateX(-${
      currentProjectIndex * projectWidth
    }px)`;
    updateActiveBullet();
    firstAndLastChecking();
  }
});

// Handling clicking bullets to show a specific index:
bullets.forEach((bullet, index) => {
  bullet.addEventListener("click", () => {
    currentProjectIndex = index;
    allProjects.style.transform = `translateX(-${
      currentProjectIndex * projectWidth
    }px)`;
    updateActiveBullet();
    firstAndLastChecking();
  });
});
