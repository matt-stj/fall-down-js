function Powerup(options, canvas){
  this.gate = options.gate
  this.x = options.x
  this.y = options.y
  this.width = options.width || 15
  this.height = options.height || 15
  this.action = 'slowDown'
  this.img = new Image();
  this.img.src = "../assets/clock.png";
}

Powerup.prototype.draw = function(ctx){
  ctx
}

Gate.prototype.draw = function(ctx) {
  ctx.drawImage(this.img, 0, this.y, this.gateStart, this.gateHeight);
  ctx.drawImage(this.img, this.gateEnd, this.y, this.canvasWidth, this.gateHeight);
};
