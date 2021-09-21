const navBtn = document.getElementById("navBtn");
const navBar = document.getElementById("navBar");
const logo = document.getElementById("logo");
const idTop = document.getElementById("idTop");
const li = document.getElementById("li");

navBtn.addEventListener('click', displayNavBar);

function displayNavBar() {
    navBar.style.display = "block";
    navBtn.style.display = "none";
    logo.style.display = "none";
    li.style.display = "inline";

    idTop.classList.add("displayTop");
    navBar.classList.add("displayNavBar");
    li.classList.add("displayLi");


}