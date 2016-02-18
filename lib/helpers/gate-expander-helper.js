module.exports = {
  topOfExpandGates: function (expandGates) {
    return expandGates.y - expandGates.height / 2;
  },
  bottomOfExpandGates: function (expandGates) {
    return expandGates.y + expandGates.height / 2;
  },
  rightOfExpandGates: function (expandGates) {
    return expandGates.x + expandGates.width / 2;
  },
  leftOfExpandGates: function (expandGates) {
    return expandGates.x - expandGates.width / 2;
  },
  centerOfExpandGates: function (expandGates) {
    return expandGates.x;
  },
  expandGatesBottom: function (expandGates) {
    return expandGates.gate.y + 12;
  },
  expandGatesTop: function (expandGates) {
    return expandGates.gate.y - 12;
  }
};