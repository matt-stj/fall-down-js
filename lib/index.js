const $ = require('jquery');
const Ball = require('./ball')
const Gate = require('./gate')
const GateBuilder = require('./gate-builder')
const GatePainter = require('./gate-painter')
const CollisionDetect = require('./collision-detect')
const Game = require('./game')
const Scoring = require('./score')
const PowerUp = require('./powerup')

var canvas = document.getElementById("game");
var ctx = canvas.getContext('2d');

var ballSpeed = 5;
var acceleration = 0.5;
var fallSpeed = 5;
var gameInPlay = false;
var paused = null;
var lost = false;
var gates = []
var ball = new Ball({}, canvas)
var game = new Game(canvas, ctx)

var score = []

GateBuilder(gates, canvas)
var powerup = new PowerUp({gate: gates[1]})

canvas.addEventListener('click', function(){
  if (gameInPlay && !lost) {
    paused = true
    gameInPlay = false
  } else {
    gameInPlay = true
    lost = false
  }
})

requestAnimationFrame(function gameLoop(){
  var adjustedScore = ((score.length))
  game.score = adjustedScore
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  checkIfPlayerLost(ball, canvas)
  if (gameInPlay && !lost) {
    drawGame(ctx, fallSpeed, acceleration, ballSpeed, canvas, gameInPlay, gates, ball, adjustedScore)
    powerup.draw(ctx)
    powerup.update(game.speed, canvas)
    requestAnimationFrame(gameLoop)
  } else if (lost) {
    game.lost(ctx);
    resetGame(ball, canvas)
    requestAnimationFrame(gameLoop)
  } else if (paused) {
    game.paused(ctx);
    requestAnimationFrame(gameLoop)
  } else {
    game.default(ctx);
    requestAnimationFrame(gameLoop)
  }
})

function checkIfPlayerLost(ball, canvas) {
  if (gameInPlay && ball.y < ball.r) {
    lost = true;
  }
}

function drawGame(ctx, fallSpeed, acceleration, ballSpeed, canvas, gameInPlay, gates, ball, adjustedScore) {
  var img = new Image();
  img.src = "../assets/wall.png";
  ctx.drawImage(img, 0, 0)
  ball.draw(ctx)
  ball.update(fallSpeed, acceleration, canvas, gameInPlay)
  GatePainter(gates, ctx, game.speed, canvas)
  CollisionDetect(ball, gates, score, powerup)
  game.update(adjustedScore, ball)
  Scoring(ctx, game.score)
}

function resetGame(ball, canvas) {
  ball.y = 10
  gates = []
  GateBuilder(gates, canvas)
}
