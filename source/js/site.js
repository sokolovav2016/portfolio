'use strict';

(function () {
  var cards = document.querySelectorAll('.card');

  window.toggle.init();
  window.drag.move(cards);
  window.sidebar.init();
  window.canvas.init();
})();