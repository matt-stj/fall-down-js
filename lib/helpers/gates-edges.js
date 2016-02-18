module.exports = {

  gate: function(gates, i){
    return gates[i]
  },
  centerOfGate: function(gates, i){
    return gates[i].y
  },
  topOfGate: function(gates, i){
    return gates[i].y - (gates[i].gateHeight / 2)
  },
  bottomOfGate: function(gates, i){
    return gates[i].y + (gates[i].gateHeight / 2)
  },
  rightGate: function(gates, i){
    return gates[i].gateEnd
  },
  leftGate: function(gates, i){
    return gates[i].gateStart
  }

}
