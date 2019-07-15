'use strict';

(function () {
  var sidebarElement = document.querySelector('.sidebar');

  function sidebarInit() {
    if (sidebarElement) {
      sidebarElement.classList.remove('sidebar--nojs');

      function closeBlock(evt) {
        var sidebarLinksElement = document.querySelectorAll('.sidebar__link');

        for (var i = 0; i < sidebarLinksElement.length; i++) {
          if (sidebarLinksElement[i] !== evt.target) {
            sidebarLinksElement[i].classList.remove('sidebar__link--open');
          }
        }
      }

      sidebarElement.addEventListener('click', function (evt) {
        if (evt.target.classList.contains('sidebar__link')) {
          evt.preventDefault();
          closeBlock(evt);
          evt.target.classList.toggle('sidebar__link--open');
        }
      })

      if (window.matchMedia("(min-width: 1400px)").matches) {
        window.addEventListener('scroll', function () {
          var scrolled = window.pageYOffset;

          if (scrolled > 209) {
            sidebarElement.style.position = 'fixed';
            sidebarElement.style.top = '50px';
          } else if (scrolled <= 209) {
            sidebarElement.style.position = 'absolute';
            sidebarElement.style.top = '259px';
          }
        })
      }
    }
  }

  window.sidebar = {
    init: sidebarInit
  };
})();

// ------- Используем цикл отдельно -------

// Используем index
// function clickHandler(index) {
//   index.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     index.classList.toggle('sidebar__link--open');
//   })
// }

// Используем evt.target
// function clickHandler(index) {
//   index.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     evt.target.classList.toggle('sidebar__link--open');
//   })
// }

// Используем this
// function clickHandler(index) {
//   index.addEventListener('click', function(evt) {
//     evt.preventDefault();
//     this.classList.toggle('sidebar__link--open');
//   })
// }

// for (var i = 0; i < sidebarLinksElement.length; i++) {
//   clickHandler(sidebarLinksElement[i]);
// }

// ------- Используем внутри цикла ------- -------

// Используем this
// for (var i = 0; i < sidebarLinksElement.length; i++) {
//   sidebarLinksElement[i].addEventListener('click', function(evt) {
//     evt.preventDefault();
//     this.classList.toggle('sidebar__link--open');
//   });
// }

// Используем evt.target
// for (var i = 0; i < sidebarLinksElement.length; i++) {
//   sidebarLinksElement[i].addEventListener('click', function(evt) {
//     evt.preventDefault();
//     evt.target.classList.toggle('sidebar__link--open');
//   });
// }