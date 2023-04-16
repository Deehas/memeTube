var menuIcon = document.querySelector(".menu-icon");
var leftside = document.querySelector(".left-side");
var container = document.querySelector(".right-side");

menuIcon.onclick = function() {
    leftside.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}