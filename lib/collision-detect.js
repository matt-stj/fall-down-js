const BallEdges = require('./helpers/ball-edges')
const PowerupEdges = require('./helpers/powerup-edges')

var collisionDetect = function(ball, gates, score, game, powerup, expandGates) {
  for (var i = 0; i < gates.length; i++){

    var topOfPowerup = PowerupEdges.topOfPowerup(powerup)
    var bottomOfPowerup = PowerupEdges.bottomOfPowerup(powerup)
    var rightOfPowerup = PowerupEdges.rightOfPowerup(powerup)
    var leftOfPowerup = PowerupEdges.leftOfPowerup(powerup)
    var centerOfPowerup = PowerupEdges.centerOfPowerup(powerup)
    var powerupGateBottom = PowerupEdges.powerupGateBottom(powerup)
    var powerupGateTop = PowerupEdges.powerupGateTop(powerup)

    // gates
    var topOfExpandGates = expandGates.y - (expandGates.height / 2)
    var bottomOfExpandGates = expandGates.y + (expandGates.height / 2)
    var rightOfExpandGates = expandGates.x + (expandGates.width / 2)
    var leftOfExpandGates = expandGates.x - (expandGates.width / 2)
    var centerOfExpandGates = expandGates.x
    var expandGatesBottom = expandGates.gate.y + 12
    var expandGatesTop = expandGates.gate.y - 12


    // console.log("POWERUP", "gate", powerupGate)

    // pull into helper
    var gate = gates[i]
    var centerOfGate = gates[i].y
    var topOfGate = centerOfGate - (gates[i].gateHeight / 2)
    var bottomOfGate = centerOfGate + (gates[i].gateHeight / 2)
    var rightGate = gates[i].gateEnd
    var leftGate = gates[i].gateStart

    detectPowerupCollision(ball, powerup)

    function detectPowerupCollision(ball, powerup){
      if (BallEdges.leftOfBall(ball) >= leftOfPowerup && BallEdges.rightOfBall(ball) <= rightOfPowerup && BallEdges.topOfBall(ball) <= powerupGateBottom && BallEdges.bottomOfBall(ball) >= powerupGateTop) {

        powerup.onScreen = false
        game.slowDownActive = true
      };
    }

    if (BallEdges.leftOfBall(ball) >= leftOfExpandGates && BallEdges.rightOfBall(ball) <= rightOfExpandGates && BallEdges.topOfBall(ball) <= expandGatesBottom && BallEdges.bottomOfBall(ball) >= expandGatesTop) {
      expandGates.onScreen = false
      game.expandGatesActive = true
      game.expandGates(gates, expandGates)
    };
    // refactor ball resting on gate logic

    if (BallEdges.bottomOfBall(ball) > centerOfGate && BallEdges.centerOfBall(ball) < bottomOfGate && ball.x > rightGate ) {
      ball.y = topOfGate;
      return;
    };
    if (BallEdges.bottomOfBall(ball) > centerOfGate && BallEdges.centerOfBall(ball) < bottomOfGate && ball.x < leftGate) {
      ball.y = topOfGate;
      return;
    };
    if (bottomOfGate < BallEdges.topOfBall(ball) && gate.scoreable === true){

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
