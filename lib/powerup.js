const ViewportHelper = require('./helpers/viewport-helper')

function Powerup(options, canvas){
  this.gate = options.gate
  this.x = (this.gate.gateStart / 2)
  this.y = (this.gate.y - this.gate.gateHeight/ 2) //top of gate
  this.width = options.width || 20
  this.height = options.height || 20
  this.action = 'slowDown'
  this.img = new Image();
  this.img.src = "../assets/clock.png";
  this.active = true
}

Powerup.prototype.draw = function(ctx){
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}


Powerup.prototype.update = function(gameSpeed, canvas) {
  var powerupOffTopofScreen = (-this.height)
  if (this.active === false){
    this.y = -50
  }
  else if (this.active === true) {
    this.y = (this.gate.y - this.gate.gateHeight)
  }
}

module.exports = Powerup;
