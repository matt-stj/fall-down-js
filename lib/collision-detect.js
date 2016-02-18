const BallEdges = require('./helpers/ball-edges')
const PowerupEdges = require('./helpers/powerup-edges')
const GatesEdges = require('./helpers/gates-edges')
const GateExpander = require('./helpers/gate-expander-helper')

var collisionDetect = function(ball, gates, score, game, powerup, expandGates) {
  for (var i = 0; i < gates.length; i++){

    var gate = GatesEdges.gate(gates, i)

    if (BallEdges.leftOfBall(ball) >= PowerupEdges.leftOfPowerup(powerup) && BallEdges.rightOfBall(ball) <= PowerupEdges.rightOfPowerup(powerup) && BallEdges.topOfBall(ball) <= PowerupEdges.powerupGateBottom(powerup) && BallEdges.bottomOfBall(ball) >= PowerupEdges.powerupGateTop(powerup)) {

      powerup.onScreen = false
      game.slowDownActive = true
    };

    if (BallEdges.leftOfBall(ball) >= GateExpander.leftOfExpandGates(expandGates) && BallEdges.rightOfBall(ball) <= GateExpander.rightOfExpandGates(expandGates) && BallEdges.topOfBall(ball) <= GateExpander.expandGatesBottom(expandGates) && BallEdges.bottomOfBall(ball) >= GateExpander.expandGatesTop(expandGates)) {
      expandGates.onScreen = false
      game.expandGatesActive = true
      game.expandGates(gates, expandGates)
    };

    ballCollideswithGates(ball, gates, i)
    ballFallsBetweenGates(ball, gate, gates, i, game)
  }
}

function ballCollideswithGates(ball, gates, i) {
  if ( ballOnTopofGate(ball, gates, i) && ball.x > GatesEdges.rightGate(gates, i)
      || ballOnTopofGate(ball, gates, i) && ball.x < GatesEdges.leftGate(gates, i))
    {
    ball.y = GatesEdges.topOfGate(gates, i);
    return;
  };
}

function ballOnTopofGate(ball, gates, i) {
  return BallEdges.bottomOfBall(ball) > GatesEdges.centerOfGate(gates, i)
  && BallEdges.centerOfBall(ball) < GatesEdges.bottomOfGate(gates, i)
}

function ballFallsBetweenGates(ball, gate, gates, i, game){
  if (GatesEdges.bottomOfGate(gates, i) < BallEdges.topOfBall(ball) && gate.scoreable === true){

    game.score++
    gate.scoreable = false
    return;
}
}

module.exports = collisionDetect;
