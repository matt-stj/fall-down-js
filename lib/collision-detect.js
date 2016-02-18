var collisionDetect = function(ball, gates, score, game, powerup) {
  for (var i = 0; i < gates.length; i++){

    var centerOfBall = ball.y + ball.height / 2
    var horizCenterBall = ball.x + ball.width / 2
    var bottomOfBall = ball.y + ball.height
    var topOfBall = centerOfBall - ball.height
    var rightOfBall = ball.x + ball.width
    var leftOfBall = ball.x - ball.width

    // pull into helper
    var gate = gates[i]
    var centerOfGate = gates[i].y
    var topOfGate = centerOfGate - (gates[i].gateHeight / 2)
    var bottomOfGate = centerOfGate + (gates[i].gateHeight / 2)
    var rightGate = gates[i].gateEnd
    var leftGate = gates[i].gateStart

    if (ball.collidesWithGate(gates[i])) {
      // ball.y = gates[i].y
    }
    if (bottomOfGate < topOfBall && gate.scoreable === true){
      game.score++
      gate.scoreable = false
      // console.log(score)
      // console.log(gate.scoreable)
      // console.log(score)
      return;

    }
  }
}

module.exports = collisionDetect;
