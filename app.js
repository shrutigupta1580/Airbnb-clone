//DOM Elements
const bars = document.querySelector(".fa-bars");
const mobileMenuFixed = document.querySelector(".mobile-menu-fixed");
const menu = document.querySelector(".mobile-menu-container ");

if (!bars || !mobileMenuFixed || !menu) {
  //Elements not found, don't run the script
} else {

function openMenu() {
  mobileMenuFixed.classList.add('is-open');
}

function closeMenu() {
  mobileMenuFixed.classList.remove('is-open');
}

function toggleMenu() {
  if(mobileMenuFixed.classList.contains('is-open')) {
    closeMenu();
  } else {
    openMenu();
  }
}

//Toggle Menu on click
bars.addEventListener('click', function (e) {
  e.stopPropagation();
  toggleMenu();
})

//Close when a link inside the menu is clicked
menu.addEventListener('click', function (e) {
  const link = e.target.closest('.mobile-menu-link');
  if (link) {
    closeMenu();
  }
})

//Close when clicking outside the menu (or anywhere in the document)
document.addEventListener("click", function(e) {
const clickedInsideMenu = menu.contains(e.target);
const clickedBars = bars.contains(e.targert);

if (!clickedInsideMenu && !clickedBars) {
  closeMenu();
}
})

}