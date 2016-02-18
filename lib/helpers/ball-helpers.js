module.exports = {
  // radius: function(options) {
  //   return options.r > 0 && options.r < 20 && options.r || 8;
  // },
  // xPosition: function(options, canvas) {
  //   var center = canvas.width / 2
  //   return options.x > 0 && options.x < canvas.width && options.x || center;
  // },
  // yPosition: function(options, canvas) {
  //   return options.y > 0 && options.y < canvas.height && options.y;
  // },
  drawBallOnCanvas: function(ctx, that) {
    // ctx.beginPath();
    ctx.fillRect(that.x, that.y, that.width, that.height);
    // ctx.stroke();
    ctx.fillStyle = "white";
    // ctx.fill();
  },
  returnTrueIfKeyEventTriggers: function(keyStorage) {
    document.onkeydown = function(e) {
      keyStorage[e.keyCode] = true;
    }
  },
  returnFalseIfKeyIsReleased: function(keyStorage) {
    document.onkeyup = function(e) {
      keyStorage[e.keyCode] = false;
    }
  },
  userLosesAndGameStops: function() {
    return "You lose"
    // this.y = this.r
  }
}
