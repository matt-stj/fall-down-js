function displayGates(gates, ctx, gameSpeed, canvas){
  for (var i = 0;i < gates.length;i++){
    gates[i].draw(ctx);
    gates[i].update(gameSpeed, canvas);
  }
}

module.exports = displayGates;
