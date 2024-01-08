//////////RAHMONOJON///////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
// ADDED CLASSSSSSSSSSSSSSSSSSSSSS

window.onscroll = function () {
  var header = document.querySelector(".bottom-header");
  var mainContent = document.querySelector(".main-content"); // Misolcha: keyingi element
  var navbar = document.querySelector(".bottom-header-content");

  if (window.pageYOffset > 56.2) {
    // Siz istagan masofa (100px misol) bo'yicha tepada qilishingiz mumkin
    header.classList.add("sticky");
    mainContent.classList.add("scrolled-past-header"); // Keyingi elementga klass qo'shish
    navbar.classList.add("shrink");
  } else {
    header.classList.remove("sticky");
    mainContent.classList.remove("scrolled-past-header"); // Klassni olib tashlash
    navbar.classList.remove("shrink");
  }
};
// RESPONSIVE NAVBAR/////////////////////////////////////////////
function toggleNavbar() {
  document.getElementById("navbar-responsive").classList.toggle("open");
}

document.getElementById("menu-btn").addEventListener("click", toggleNavbar);
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
////////////////////////////////////////////////////
