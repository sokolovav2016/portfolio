'use strict';

(function () {
  var cards = document.querySelectorAll('.card');

  if (document.querySelector('.index')) {
    document.querySelector('.header__logo').removeAttribute('href');
  }

  window.toggle.init();
  window.drag.move(cards);
  window.sidebar.init();
  window.canvas.init();
  window.dictionary.init(); 
})();