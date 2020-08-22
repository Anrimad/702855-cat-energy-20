// Menu navigation
var mainNav = document.querySelector('.main-navigation');
var navToggle = document.querySelector('.main-navigation__toggle');

mainNav.classList.remove('main-navigation--nojs');

navToggle.addEventListener('click', function () {

  if (mainNav.classList.contains('main-navigation--closed')) {
    mainNav.classList.remove('main-navigation--closed');
    mainNav.classList.add('main-navigation--opened');
  } else {
    mainNav.classList.add('main-navigation--closed');
    mainNav.classList.remove('main-navigation--opened');
  }
})


// Map
let mainMap = document.querySelector('.map-js');
mainMap.classList.add('contacts__map--nojs');

function initMap() {
  map = new google.maps.Map(document.querySelector(".map-js"), {
    center: { lat: 59.938816, lng: 30.323063 },
    zoom: 17
  });
}
