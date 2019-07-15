'use strict';

(function () {
  function dragArr(elements) {
    if (window.matchMedia("(min-width: 960px)").matches) {
      for (var i = 0; i < elements.length; i++) {
        moveCard(elements[i], elements);
      }
    }
  }

  function moveCard(element, arr) {
    element.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      element.classList.remove('card--arrow');

      for (var i = arr.length - 1; i >= 0; i--) {
        setAbsolute(arr[i]);
      }

      function setAbsolute(elem) {
        var cardStartCoords = elem.getBoundingClientRect();
        elem.style.position = 'absolute';
        elem.style.top = cardStartCoords.top + 'px';
        elem.style.left = cardStartCoords.left + 'px';
      }

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };

      var dragged = false;

      function onMouseMove(moveEvt) {
        moveEvt.preventDefault();
        dragged = true;

        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };

        element.style.top = (element.offsetTop - shift.y) + 'px';
        element.style.left = (element.offsetLeft - shift.x) + 'px';
      }

      function onMouseUp(upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);

        if (dragged) {
          var onClickPreventDefault = function (evt) {
            evt.preventDefault();
            element.removeEventListener('click', onClickPreventDefault)
          };
          element.addEventListener('click', onClickPreventDefault);

          element.classList.add('card--arrow');
        }
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  }

  window.drag = {
    move: dragArr
  };
})();