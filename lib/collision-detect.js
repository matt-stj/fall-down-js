var collisionDetect = function(ball, gates, score, game, powerup) {
  for (var i = 0; i < gates.length; i++){

    // pull into helper

    var centerOfBall = ball.y
    var horizCenterBall = ball.x
    var bottomOfBall = centerOfBall + ball.r
    var topOfBall = centerOfBall + ball.r
    var rightOfBall = ball.x + ball.r
    var leftOfBall = ball.x - ball.r

    // console.log("BALL", "top", topOfBall)


    // pull into helper
    var topOfPowerup = powerup.y - (powerup.height / 2)
    var bottomOfPowerup = powerup.y + (powerup.height / 2)
    var rightOfPowerup = powerup.x + (powerup.width / 2)
    var leftOfPowerup = powerup.x - (powerup.width / 2)
    var centerOfPowerup = powerup.x
    var powerupGateBottom = powerup.gate.y + 12
    var powerupGateTop = powerup.gate.y - 12


    // console.log("POWERUP", "gate", powerupGate)

    // pull into helper
    var gate = gates[i]
    var centerOfGate = gates[i].y
    var topOfGate = centerOfGate - (gates[i].gateHeight / 2)
    var bottomOfGate = centerOfGate + (gates[i].gateHeight / 2)
    var rightGate = gates[i].gateEnd
    var leftGate = gates[i].gateStart

    if (leftOfBall >= leftOfPowerup && rightOfBall <= rightOfPowerup && topOfBall <= powerupGateBottom && bottomOfBall >= powerupGateTop) {

      powerup.onScreen = false
      game.slowDownActive = true
    };
    // refactor ball resting on gate logic

    if (bottomOfBall > centerOfGate && centerOfBall < bottomOfGate && ball.x > rightGate ) {
      ball.y = topOfGate;
      return;
    };
    if (bottomOfBall > centerOfGate && centerOfBall < bottomOfGate && ball.x < leftGate) {
      ball.y = topOfGate;
      return;
    };
    if (bottomOfGate < topOfBall && gate.scoreable === true){

      // console.log(gate.scoreable)
      game.score++
      gate.scoreable = false
      // console.log(score)
      // console.log(gate.scoreable)
      // console.log(score)
      return;

      throw new Error('None of the things happened.');
    };
  }
}

module.exports = collisionDetect;
