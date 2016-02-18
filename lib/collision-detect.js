var collisionDetect = function(ball, gates, score, game, powerup) {
  for (var i = 0; i < gates.length; i++){

    var gate = gates[i]

    if (ball.collidesWithGate(gates[i])) {
    }

  }
}

module.exports = collisionDetect;
