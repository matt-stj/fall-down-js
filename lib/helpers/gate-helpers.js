module.exports = {
  randGateStartAttrs: function(canvas) {
    return Math.abs(Math.floor((Math.random() * canvas.width-200) + 0));
  },

  randGateEndAttrs: function(gateStart) {
    return Math.abs(gateStart + Math.floor((Math.random() * 100) + 15));
  }
};
