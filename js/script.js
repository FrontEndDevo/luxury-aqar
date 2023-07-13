const navbarMenu = document.querySelector("#menu");
const navbarCloseMenu = document.getElementById("close-menu");
const navbarOpenMenu = document.getElementById("open-menu");

navbarCloseMenu.addEventListener("click", () => {
  navbarMenu.style.display = "none";
});

navbarOpenMenu.addEventListener("click", () => {
  navbarMenu.style.display = "block";
});
