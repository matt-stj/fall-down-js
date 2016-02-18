const BallHelper = require('./helpers/ball-helpers');

function Ball(canvas, options={}){
  this.r = BallHelper.radius(options);
  this.x = BallHelper.xPosition(options, canvas);
  this.y = BallHelper.yPosition(options, canvas) || 1 + this.r;
  this.sAngle = 0;
  this.eAngle = 2 * Math.PI;
  this.keyboarder = new Keyboarder();
  this.speed = 5;
}

Ball.prototype.draw = function(ctx) {
  var that = this;
  BallHelper.drawBallOnCanvas(ctx, that);
  return this;
};

Ball.prototype.update = function(fallSpeed, keyboarder, canvas){
  var ball = this;
  moveBallLaterally(ball, canvas, this.speed);
  moveBallLongitudinally(ball, canvas, this.speed);
};

function leftArrowKeyDown(ball) {
  return ball.keyboarder.isDown(ball.keyboarder.KEYS.LEFT) && ball.x > ball.r;
}

function rightArrowKeyDown(ball, canvas) {
  return ball.keyboarder.isDown(ball.keyboarder.KEYS.RIGHT) && ballIsOnCanvas(ball, canvas);
}

function ballIsOnCanvas(ball, canvas) {
  return ball.x > 0 && ball.x < (canvas.width - ball.r) && ball.y < canvas.height;
}

function moveBallLaterally(ball, canvas, ballSpeed) {
  if (leftArrowKeyDown(ball)) {
    ball.x -= ballSpeed;
  } else if (rightArrowKeyDown(ball, canvas)) {
    ball.x += ballSpeed;
  }
}

function moveBallLongitudinally(ball, canvas, fallSpeed) {
  if (ball.y >= (canvas.height - ball.r)) {
    ball.y = ball.y;
  } else {
    ball.y += fallSpeed;
  }
}

var Keyboarder = function() {
  var keyState = {};
  BallHelper.returnTrueIfKeyEventTriggers(keyState);
  BallHelper.returnFalseIfKeyIsReleased(keyState);

  this.isDown = function(keyCode) {
    return keyState[keyCode] === true;
  };

  this.KEYS = { LEFT: 37, RIGHT: 39 };
};

module.exports = Ball;
