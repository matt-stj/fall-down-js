const GateHelper = require('./helpers/gate-helpers');
const ViewportHelper = require('./helpers/viewport-helper');
function Gate(options, canvas) {
  this.gateHeight = options.gateHeight || 15;
  this.y = options.y || ViewportHelper.bottomEdge(canvas) - this.gateHeight;
  this.gateStart = options.gateStart || GateHelper.randGateStartAttrs(canvas);
  this.gateEnd = options.gateEnd || GateHelper.randGateEndAttrs(this.gateStart);
  this.canvasWidth = canvas.width;
  this.scoreable = true;
  this.img = new Image();
  this.img.src = 'assets/board.png';
}
Gate.prototype.update = function (gameSpeed, canvas) {
  var gateOffTopofScreen = -this.gateHeight;
  this.y -= gameSpeed;
  if (this.y < gateOffTopofScreen) {
    this.y = ViewportHelper.bottomEdge(canvas);
    this.scoreable = true;
    this.gateStart = GateHelper.randGateStartAttrs(canvas);
    this.gateEnd = GateHelper.randGateEndAttrs(this.gateStart);
  }
};
Gate.prototype.draw = function (ctx) {
  ctx.drawImage(this.img, 0, this.y, this.gateStart, this.gateHeight);
  ctx.drawImage(this.img, this.gateEnd, this.y, this.canvasWidth, this.gateHeight);
};
module.exports = Gate;