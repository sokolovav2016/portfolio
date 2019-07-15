'use strict';

(function () {
  var canvas = document.getElementById('canvas');

  function canvasInit() {
    if (canvas) {
      var ctx = canvas.getContext('2d');
      var x = 30;
      var y = 10;
      var c = 1;

      ctx.strokeStyle = 'blue';

      ctx.beginPath();

      ctx.moveTo(x + 50 * c, y + 75 * c);
      ctx.lineTo(x + 100 * c, y + 75 * c);
      ctx.lineTo(x + 100 * c, y + 125 * c);
      ctx.lineTo(x + 150 * c, y + 125 * c);
      ctx.lineTo(x + 150 * c, y + 175 * c);
      ctx.lineTo(x + 100 * c, y + 175 * c);
      ctx.lineTo(x + 100 * c, y + 225 * c);
      ctx.lineTo(x + 50 * c, y + 225 * c);
      ctx.lineTo(x + 50 * c, y + 175 * c);
      ctx.lineTo(x + 0 * c, y + 175 * c);
      ctx.lineTo(x + 0 * c, y + 125 * c);
      ctx.lineTo(x + 50 * c, y + 125 * c);
      ctx.lineTo(x + 50 * c, y + 75 * c);

      ctx.moveTo(x + 50 * c, y + 75 * c);
      ctx.lineTo(x + 75 * c, y + 50 * c);
      ctx.lineTo(x + 25 * c, y + 50 * c);
      ctx.lineTo(x + 50 * c, y + 25 * c);
      ctx.lineTo(x + 100 * c, y + 25 * c);
      ctx.lineTo(x + 125 * c, y + 0 * c);
      ctx.lineTo(x + 175 * c, y + 0 * c);
      ctx.lineTo(x + 150 * c, y + 25 * c);
      ctx.lineTo(x + 200 * c, y + 25 * c);
      ctx.lineTo(x + 175 * c, y + 50 * c);
      ctx.lineTo(x + 125 * c, y + 50 * c);
      ctx.lineTo(x + 100 * c, y + 75 * c);

      ctx.moveTo(x + 200 * c, y + 25 * c);
      ctx.lineTo(x + 200 * c, y + 75 * c);
      ctx.lineTo(x + 225 * c, y + 50 * c);
      ctx.lineTo(x + 225 * c, y + 100 * c);
      ctx.lineTo(x + 200 * c, y + 125 * c);
      ctx.lineTo(x + 200 * c, y + 175 * c);
      ctx.lineTo(x + 175 * c, y + 200 * c);
      ctx.lineTo(x + 175 * c, y + 150 * c);
      ctx.lineTo(x + 150 * c, y + 175 * c);

      ctx.moveTo(x + 150 * c, y + 125 * c);
      ctx.lineTo(x + 175 * c, y + 100 * c);
      ctx.lineTo(x + 175 * c, y + 50 * c);

      ctx.moveTo(x + 0 * c, y + 125 * c);
      ctx.lineTo(x + 25 * c, y + 100 * c);
      ctx.lineTo(x + 50 * c, y + 100 * c);

      ctx.moveTo(x + 25 * c, y + 100 * c);
      ctx.lineTo(x + 25 * c, y + 50 * c);

      ctx.moveTo(x + 25 * c, y + 175 * c);
      ctx.lineTo(x + 25 * c, y + 200 * c);
      ctx.lineTo(x + 50 * c, y + 200 * c);

      ctx.moveTo(x + 100 * c, y + 225 * c);
      ctx.lineTo(x + 125 * c, y + 200 * c);
      ctx.lineTo(x + 175 * c, y + 200 * c);

      ctx.moveTo(x + 125 * c, y + 200 * c);
      ctx.lineTo(x + 125 * c, y + 175 * c);

      ctx.moveTo(x + 100 * c, y + 125 * c);
      ctx.lineTo(x + 125 * c, y + 100 * c);
      ctx.lineTo(x + 125 * c, y + 50 * c);

      ctx.moveTo(x + 125 * c, y + 100 * c);
      ctx.lineTo(x + 175 * c, y + 100 * c);

      ctx.moveTo(x + 175 * c, y + 0 * c);
      ctx.lineTo(x + 175 * c, y + 25 * c);

      ctx.moveTo(x + 200 * c, y + 50 * c);
      ctx.lineTo(x + 225 * c, y + 50 * c);

      ctx.stroke();
    }
  }

  window.canvas = {
    init: canvasInit
  };
})();