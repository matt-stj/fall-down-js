const BallHelper = require('./helpers/ball-helpers')

function Ball(options={}, canvas){
  var center = canvas.width / 2
  this.x = options.x || center;
  this.y = options.y || 20;
  this.width = options.width || 20 ;
  this.height = options.height || 20;
  this.keyboarder = new Keyboarder
  this.speed = 5
  this.collidingWithGate = false
}

Ball.prototype.draw = function(ctx) {
  var that = this
  BallHelper.drawBallOnCanvas(ctx, that);
  return this;
};

Ball.prototype.collidesWithPowerup = function(powerup){
  if (this.x < powerup.x + powerup.width &&
    this.x + this.width > powerup.x &&
    this.y < powerup.y + powerup.height &&
    this.height + this.y > powerup.y) {
      console.log("collision with powerup")
      this.collisionWithGate = true
    }
    else{
      this.collisionWithGate = false
    }
  }

  Ball.prototype.collidesWithGate = function(gate){
    if (this.onLeftGate(gate) || this.onRightGate(gate)) {
      this.collidingWithGate = true;
      this.y = (gate.y - ((gate.gateHeight / 2) + this.height))
    }
    else{
      this.collidingWithGate = false
    }
  }

  Ball.prototype.onLeftGate = function(gate){
    if (this.x < gate.gateStart &&
      this.x + this.width > 0 &&
      this.y < gate.y + gate.gateHeight &&
      this.height + this.y > gate.y) {
        return true
      }
    }

    Ball.prototype.onRightGate = function(gate){
      if ( this.x > gate.gateEnd &&
        this.x + this.width > 0 &&
        this.y < gate.y + gate.gateHeight &&
        this.height + this.y > gate.y) {
          return true
        }
      }

      Ball.prototype.update = function(fallSpeed, keyboarder, canvas, gameInPlay){
        var ball = this
        moveBallLaterally(ball, canvas, this.speed)
        moveBallLongitudinally(ball, canvas, this.speed)
      }

      function leftArrowKeyDown(ball) {
        return ball.keyboarder.isDown(ball.keyboarder.KEYS.LEFT) && ball.x
      }

      function rightArrowKeyDown(ball, canvas) {
        return ball.keyboarder.isDown(ball.keyboarder.KEYS.RIGHT) && ballIsOnCanvas(ball, canvas)
      }

      function ballIsOnCanvas(ball, canvas) {
        return ball.x > 0 && ball.x < (canvas.width - ball.width) && ball.height < canvas.height
      }

      function topOfCanvas(ball) {
        return ball.height;
      }

      function moveBallLaterally(ball, canvas, ballSpeed) {
        if (leftArrowKeyDown(ball)) {
          ball.x -= ballSpeed
        } else if (rightArrowKeyDown(ball, canvas)) {
          ball.x += ballSpeed
        };
      }

      function moveBallLongitudinally(ball, canvas, fallSpeed) {
        if (ball.collidingWithGate) {
          debugger;
        }
        else if (ball.y >= (canvas.height - ball.height)) {
          ball.y = ball.y;
        } else {
          ball.y += fallSpeed;
        }
      }

      var Keyboarder = function() {
        var keyState = {};
        BallHelper.returnTrueIfKeyEventTriggers(keyState)
        BallHelper.returnFalseIfKeyIsReleased(keyState)

        this.isDown = function(keyCode) {
          return keyState[keyCode] === true;
        };

        this.KEYS = { LEFT: 37, RIGHT: 39 };
      }

      module.exports = Ball;
