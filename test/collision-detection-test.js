const assert = require('chai').assert;

const Gate = require('../lib/gate');
const GateHelper = require('../lib/helpers/gate-helpers')
const GateBuilder = require('../lib/gate-builder')
const GatePainter = require('../lib/gate-painter')
const CollisionDetect = require('../lib/collision-detect')
const Ball = require('../lib/ball')
const ViewPort = require('../lib/viewport');
const BallEdges = require('../lib/helpers/ball-edges')
const PowerupEdges = require('../lib/helpers/powerup-edges')
const GatesEdges = require('../lib/helpers/gates-edges')
const GateExpander = require('../lib/helpers/gate-expander-helper')
const Game = require('../lib/game')

describe('Collisions', function() {

  context('detection', function() {

    var canvas = document.getElementById("game");
    var ctx = canvas.getContext('2d');
    var gates = [new Gate({}, canvas)]
    var ball = new Ball({}, canvas)
    var game = new Game(canvas, ctx, {speed: 15, score: 40});
    var expandGates = ""
    var powerup = ""
    GateBuilder(gates, canvas)

    var ballSpeed = 5;
    var acceleration = 0.5;
    var fallSpeed = 5;

    var gate = gates[0]
    gate.y = 88
    gate.gateHeight = 15
    gate.gateStart = 150
    gate.gateEnd = 190
    var centerOfGate = gate.y
    var topOfGate = centerOfGate + gate.gateHeight

    ball.y = 80
    ball.x = 50

    it('ball y is correct when ball collides with left gate', function() {
      assert.equal(BallEdges.bottomOfBall(ball), gate.y)
    });

    it('ball x is correct when ball collides with left gate', function() {
      assert(BallEdges.rightOfBall(ball) < gate.gateStart)
    });

    it('ball y is correct when ball collides with right gate', function() {
      assert.equal(BallEdges.bottomOfBall(ball), gate.y)
    });

    it('ball x is correct when ball collides with right gate', function() {
      ball.x = 200
      assert(BallEdges.leftOfBall(ball) > gate.gateEnd)
    });

  });

});
