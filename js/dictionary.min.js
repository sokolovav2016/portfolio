'use strict';

(function () {
  var containerElement = document.querySelector('.dictionary__container');

  function getTr(obj, i) {
    var templateElement = document.querySelector('#dict')
      .content
      .querySelector('.dictionary__line');
    var trElement = templateElement.cloneNode(true);
    var number = trElement.querySelector('.dictionary__number');
    var link = trElement.querySelector('.dictionary__link');
    var translation = trElement.querySelector('.dictionary__translation');
    var part = trElement.querySelector('.dictionary__part');

    number.textContent = i + 1;
    link.textContent = obj.word;
    link.href = obj.link;
    translation.textContent = obj.translation;
    part.textContent = obj.part;

    return trElement;
  }

  function dictionaryRender() {
    if (containerElement) {
      var fragment = document.createDocumentFragment();
      var data = window.oxfordData;
      var numberOfWods = document.querySelector('.heading__description');

      for (var i = 0; i < data.length; i++) {
        fragment.appendChild(getTr(data[i], i));
      }

      containerElement.appendChild(fragment);
      numberOfWods.textContent = 'Пока в словаре ' + data.length + ' слов';
    }
  }

  window.dictionary = {
    init: dictionaryRender
  };
})();
