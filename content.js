$(document).ready(function () {
   var fb_nav_class = document.getElementById('blueBarNAXAnchor');

   var searchFacebook = document.getElementsByName('q')[0];

   searchFacebook.placeholder = 'Search JediBook';

   fb_nav_class.style.backgroundImage = "linear-gradient(rgb(135,220,90) 0%,rgb(254,254,254) 30%,rgb(254,254,254) 50%,rgb(254,254,254) 70%,rgb(135,220,90) 100%)";

});