'use strict';

(function () {
  var cardElements = document.querySelectorAll('.card');
  var headerElement = document.querySelector('.header');

  if (document.querySelector('.index')) {
    document.querySelector('.header__logo').removeAttribute('href');
  }


  window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset;

    if (scrolled > 78) {      
      headerElement.style.boxShadow = '0px 5px 15px 0px rgba(0, 0, 0, 0.15)';
      headerElement.style.borderBottom = '1px solid rgb(217, 217, 217)';
    } else if (scrolled <= 78) {
      headerElement.style.boxShadow = '';
      headerElement.style.borderBottom = '';
    }
  })

  window.toggle.init();
  // window.drag.move(cardElements);
  window.sidebar.init();
  window.canvas.init();
  window.dictionary.init(); 
})();