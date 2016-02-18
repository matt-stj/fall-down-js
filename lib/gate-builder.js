const Gate = require('./gate');
function buildGates(gates, canvas) {
  var spacing = 75;
  for (var i = 0; i < 6; i++) {
    var gatePosition = canvas.height - spacing;
    gates.push(new Gate({ y: gatePosition + 75 }, canvas));
    spacing += 75;
  }
}
module.exports = buildGates;