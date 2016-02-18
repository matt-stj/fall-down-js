var Game = function(canvas, ctx, options={}) {
  this.backgroundColor = options.backgroundColor || "cyan"
  this.width = canvas.width
  this.height = canvas.height
  this.largeFontSize = options.largeFontSize || "70px"
  this.smallFontSize = options.smallFontSize || "30px"
  this.fontFamily = options.fontFamily || "Open Sans"
  this.textColor = options.textColor || "black"
  this.gameTitle = options.gameTitle || "Fall Down"
  this.instructions = options.instructions || "Click to Play"
  this.speed = options.speed || 0
  this.score = options.score || 0
  this.slowDownActive = false
  this.expandGatesActive = false
}

Game.prototype.default = function(ctx) {
  ctx.fillStyle = this.backgroundColor;
  ctx.fillRect(0, 0, this.width, this.height);
  ctx.fillStyle = this.textColor;
  ctx.font = this.largeFontSize + " " + this.fontFamily;
  ctx.textAlign = "center";
  ctx.fillText(this.gameTitle, this.width/2, this.height/2 - 20);
  ctx.font = this.smallFontSize + " " + this.fontFamily;
  ctx.fillText(this.instructions, this.width/2, this.height/2 + 35);
};

Game.prototype.paused = function(ctx) {
  ctx.fillStyle = this.backgroundColor;
  ctx.fillRect(0, 0, this.width, this.height);
  ctx.fillStyle = this.textColor;
  ctx.font = this.largeFontSize + " " + this.fontFamily;
  ctx.textAlign = "center";
  ctx.fillText("Paused", this.width/2, this.height/2 - 20);
  ctx.font = this.smallFontSize + " " + this.fontFamily;
  ctx.fillText(this.instructions, this.width/2, this.height/2 + 35);
};

Game.prototype.lost = function(ctx) {
  ctx.fillStyle = this.backgroundColor;
  ctx.fillRect(0, 0, this.width, this.height);
  ctx.fillStyle = this.textColor;
  ctx.font = this.largeFontSize + " " + this.fontFamily;
  ctx.textAlign = "center";
  ctx.fillText("You lost", this.width/2, this.height/2 - 20);
  ctx.font = this.smallFontSize + " " + this.fontFamily;
  ctx.fillText(this.instructions, this.width/2, this.height/2 + 35);
  ctx.fillText("Score: " + this.score, this.width/2, this.height/2 + 70);
  console.log(this.score);
};

Game.prototype.newHighScore = function(ctx) {
  ctx.fillStyle = this.backgroundColor;
  ctx.fillRect(0, 0, this.width, this.height);
  ctx.fillStyle = this.textColor;
  ctx.font = this.largeFontSize + " " + this.fontFamily;
  ctx.textAlign = "center";
  ctx.fillText("New High Score!", this.width/2, this.height/2 - 20);
  ctx.font = this.smallFontSize + " " + this.fontFamily;
  ctx.fillText(this.instructions, this.width/2, this.height/2 + 35);
  ctx.fillText("Score: " + this.score, this.width/2, this.height/2 + 70);
};

Game.prototype.update = function(game, ball, powerup) {
  console.log("powerup onscreen = ", powerup.onScreen, "games slowdown active", game.slowDownActive)
  if (game.slowDownActive === false){
    normalSpeed(game, ball)
  }

  else if (game.slowDownActive === true) {
    slowSpeed(game, ball, powerup)
  }
}

Game.prototype.expandGates = function(gates, powerup) {
  gates.forEach(function(gate) {
    gate.gateStart -= 25
    gate.gateEnd += 25
  });
  resetPowerup(this, powerup)
}

function resetPowerup(game, powerup) {
    setTimeout(function () {
        game.expandGatesActive = false;
        powerup.onScreen = true;
    }, 15000);
  }

function normalSpeed(game, ball) {
  if (game.score < 2 ){
    game.speed = 0
  }
  else if (game.score > 2 && game.score < 5) {
    game.speed = 1
  }
  else if (game.score > 5 &&  game.score < 10) {
    game.speed = 1.5
  }
  else if (game.score > 10 &&  game.score < 20) {
    game.speed = 2
  }
  else if (game.score > 20 && game.score < 30){
    game.speed = 2.5
    ball.speed = 5.5
      }
  else if (game.score > 30 && game.score < 40){
    game.speed = 3
    ball.speed = 6
      }
  else if (game.score > 40 && game.score < 50){
    game.speed = 3.5
    ball.speed = 6.5
      }
  else if (game.score > 50){
      game.speed = 4
      ball.speed = 7
      }
}

function slowSpeed(game, ball, powerup) {
  if (game.score < 2 ){
    game.speed = 0
  }
  else if (game.score > 2 && game.score < 5) {
    game.speed = 0.5
  }
  else if (game.score > 5 &&  game.score < 10) {
    game.speed = 1
  }
  else if (game.score > 10 &&  game.score < 20) {
    game.speed = 1.5
  }
  else if (game.score > 20 && game.score < 30){
    game.speed = 2.0
    ball.speed = 5.5
      }
  else if (game.score > 30 && game.score < 40){
    game.speed = 2.5
    ball.speed = 6
      }
  else if (game.score > 40 && game.score < 50){
    game.speed = 3
    ball.speed = 6.5
      }
  else if (game.score > 50){
      game.speed = 3.5
      ball.speed = 7
      }
  resetGameSpeed(game, powerup)
}

function resetGameSpeed(game, powerup) {
    setTimeout(function () {
        game.slowDownActive = false;
        powerup.onScreen = true;
    }, 15000);
}


module.exports = Game;
