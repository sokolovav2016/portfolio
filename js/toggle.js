'use strict';

(function() {
  function toggleInit() {
    var headerElement = document.querySelector('.header');
    var toggleElement = document.querySelector('.toggle');

    headerElement.classList.remove('header--nojs');

    toggleElement.addEventListener('click', function() {
      headerElement.classList.toggle('header--open');
    });
  }

  window.toggle = {
    init: toggleInit
  };
})();
