function RectangularBall(x, y, width, height) {
  this.x = x || 50;
  this.y = y || 50;
  this.width = width || 10;
  this.height = height || 10;
}
RectangularBall.prototype.collidesWithPowerup = function (powerup) {
  if (this.x < powerup.x + powerup.width && this.x + this.width > powerup.x && this.y < powerup.y + powerup.height && this.height + this.y > powerup.y) {
    console.log('collision');
  } else {
    console.log('no collision');
  }
};
module.exports = RectangularBall;