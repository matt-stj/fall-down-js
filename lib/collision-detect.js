const BallEdges = require('./helpers/ball-edges')
const PowerupEdges = require('./helpers/powerup-edges')
const GatesEdges = require('./helpers/gates-edges')

var collisionDetect = function(ball, gates, score, game, powerup, expandGates) {
  for (var i = 0; i < gates.length; i++){

    var gate = GatesEdges.gate(gates, i)

    var topOfExpandGates = expandGates.y - (expandGates.height / 2)
    var bottomOfExpandGates = expandGates.y + (expandGates.height / 2)
    var rightOfExpandGates = expandGates.x + (expandGates.width / 2)
    var leftOfExpandGates = expandGates.x - (expandGates.width / 2)
    var centerOfExpandGates = expandGates.x
    var expandGatesBottom = expandGates.gate.y + 12
    var expandGatesTop = expandGates.gate.y - 12



    if (BallEdges.leftOfBall(ball) >= PowerupEdges.leftOfPowerup(powerup) && BallEdges.rightOfBall(ball) <= PowerupEdges.rightOfPowerup(powerup) && BallEdges.topOfBall(ball) <= PowerupEdges.powerupGateBottom(powerup) && BallEdges.bottomOfBall(ball) >= PowerupEdges.powerupGateTop(powerup)) {

      powerup.onScreen = false
      game.slowDownActive = true
    };

    if (BallEdges.leftOfBall(ball) >= leftOfExpandGates && BallEdges.rightOfBall(ball) <= rightOfExpandGates && BallEdges.topOfBall(ball) <= expandGatesBottom && BallEdges.bottomOfBall(ball) >= expandGatesTop) {
      expandGates.onScreen = false
      game.expandGatesActive = true
      game.expandGates(gates, expandGates)
    };
    // refactor ball resting on gate logic

    if (BallEdges.bottomOfBall(ball) > GatesEdges.centerOfGate(gates, i) && BallEdges.centerOfBall(ball) < GatesEdges.bottomOfGate(gates, i) && ball.x > GatesEdges.rightGate(gates, i) ) {
      ball.y = GatesEdges.topOfGate(gates, i);
      return;
    };
    if (BallEdges.bottomOfBall(ball) > GatesEdges.centerOfGate(gates, i) && BallEdges.centerOfBall(ball) < GatesEdges.bottomOfGate(gates, i) && ball.x < GatesEdges.leftGate(gates, i)) {
      ball.y = GatesEdges.topOfGate(gates, i);
      return;
    };
    if (GatesEdges.bottomOfGate(gates, i) < BallEdges.topOfBall(ball) && gate.scoreable === true){

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
