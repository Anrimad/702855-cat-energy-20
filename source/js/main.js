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
var mainMap = document.querySelector('.map-js');
mainMap.classList.add('contacts__map--nojs');

function initMap() {
  var coordinates = { lat: 59.938816, lng: 30.323063 },
    markerIcon = 'img/map-pin.png',
    map = new google.maps.Map(document.querySelector('.map-js'), {
      center: coordinates,
      zoom: 17,
      scrollwheel: false
    });

  marker = new google.maps.Marker({
    position: coordinates,
    map: map,
    icon: markerIcon,
    animation: google.maps.Animation.BOUNCE
  });
}
