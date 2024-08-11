'use strict';

document.addEventListener('DOMContentLoaded', function () {
  console.log('Hello Bulma!');
});

document.addEventListener('scroll', function () {
  // Adjust the blur amount based on scroll position
  var scrollPosition = window.scrollY;
  var blurAmount = Math.min(scrollPosition / 10, 100); // first # is how fast, second # is how much
  document.querySelector('.blur-background').style.filter = 'blur(' + blurAmount + 'px)';
});

document.addEventListener('scroll', function () {
  var scrollPosition = window.scrollY;
  var scale = 1.05 + scrollPosition / 5000; // Adjust the divisor for the scaling speed
  document.querySelector('.blur-background').style.transform = 'scale(' + scale + ')';
});

// SWITCHING MENU BACKGROUNDS script.js

document.addEventListener('DOMContentLoaded', function () {
  var menuItems = document.querySelectorAll('.level-item');

  menuItems.forEach(function (item) {
    item.addEventListener('mouseover', function (event) {
      var bgElement = event.target.querySelector('.background');
      var bgImage = event.target.getAttribute('data-bg');
      document.body.style.backgroundImage = 'url(\'' + bgImage + '\')';
      document.body.style.backgroundSize = '100%';
    });

    item.addEventListener('mouseout', function () {
      document.body.style.backgroundImage = '';
    });
  });
});

// END SWITCHING MENU BACKGROUNDS script.js