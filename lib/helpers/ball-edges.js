module.exports = {

  centerOfBall: function(ball){
    return ball.y
  },
  horizCenterBall: function(ball){
    return ball.x
  },
  bottomOfBall: function(ball){
    return ball.y + ball.r
  },
  topOfBall: function(ball){
    return ball.y - ball.r
  },
  rightOfBall: function(ball){
    return ball.x + ball.r
  },
  leftOfBall: function(ball){
    return ball.x - ball.r
  }

}
