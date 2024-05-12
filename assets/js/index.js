//HEADER

const openIcon = document.getElementById("openIcon");
const closeIcon = document.getElementById("closeIcon");
const menuNav = document.getElementById("menuNav");

//Au chargement de la page menu fermé

function windowLoad() {
  menuNav.style.display = "none";
}

//openMenu() = ouvrir le menu de navigation

function openMenu() {
  menuNav.style.display = "block";
}

//closeMenu() = ouvrir le menu de navigation

function closeMenu() {
  menuNav.style.display = "none";
}
