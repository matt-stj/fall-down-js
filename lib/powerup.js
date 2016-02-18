const ViewportHelper = require('./helpers/viewport-helper')

function Powerup(options, canvas){
  this.gate = options.gate
  this.y = (this.gate.y - this.gate.gateHeight/ 2) //top of gate
  this.width = options.width || 20
  this.height = options.height || 20
  this.action = options.action || ""
  if (this.action === "slowDown"){
    this.x = ((this.gate.gateStart / 2) - 10)
    this.img = new Image();
    this.img.src = "../assets/clock.png";
  }
  else if (this.action === "expandGates"){
    this.x = (((this.gate.gateEnd + canvas.width) / 2) + 20 )
    this.img = new Image();
    this.img.src = "../assets/saw.png";
  }

  this.onScreen = true
}

Powerup.prototype.draw = function(ctx){
  ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
}


Powerup.prototype.update = function(gameSpeed, canvas) {
  if (this.onScreen === false){
    console.log(this.gate.y, this.y)
    this.y = -500
  }
  else {
    this.y = (this.gate.y - this.height)
  }
}

module.exports = Powerup;
