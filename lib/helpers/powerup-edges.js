module.exports = {
  topOfPowerup: function (powerup) {
    return powerup.y - powerup.height / 2;
  },
  bottomOfPowerup: function (powerup) {
    return powerup.y + powerup.height / 2;
  },
  rightOfPowerup: function (powerup) {
    return powerup.x + powerup.width / 2;
  },
  leftOfPowerup: function (powerup) {
    return powerup.x - powerup.width / 2;
  },
  centerOfPowerup: function (powerup) {
    return powerup.x;
  },
  powerupGateBottom: function (powerup) {
    return powerup.gate.y + 12;
  },
  powerupGateTop: function (powerup) {
    return powerup.gate.y - 12;
  }
};