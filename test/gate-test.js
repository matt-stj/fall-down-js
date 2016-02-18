const assert = require('chai').assert;
const Gate = require('../lib/gate');
const ViewPort = require('../lib/viewport');

describe('Gate', function() {

  context('with default attributes', function() {

    var viewPort = new ViewPort(300, 200)
    var gate = new Gate({}, viewPort);

    it('should have a y coordinate that is gateHeight less than the canvas height', function() {
      assert.equal(gate.y, (viewPort.height - gate.gateHeight));
    });

    it('gateStart should have a randomly generated x coordinate that is less than the x coord of the gateEnd', function() {
      assert(gate.gateStart < gate.gateEnd);
    });

    it('gateEndshould have a randomly generated x coordinate that is greater than the x coord of the gateStart', function() {
      assert(gate.gateEnd > gate.gateStart);
    });

    it('has a gate height', function() {
      assert.equal(gate.gateHeight, 15);
    });

    it('has a canvas width', function() {
      assert.equal(gate.canvasWidth, viewPort.width);
    });

  });

  context('with given attributes', function() {

    var viewPort = new ViewPort(300, 200)
    var gate = new Gate({ y: 100,
                          gateStart: 50,
                          gateEnd: 100,
                        }, viewPort);

    it('can accept a y coordinate for y position on canvas', function() {
      assert.equal(gate.y, 100);
    });

    it('can accept an x coordinate for where the hole starts', function() {
      assert.equal(gate.gateStart, 50);
    });

    it('can accept an x coordinate for where the hole ends', function() {
      assert.equal(gate.gateEnd, 100);
    });

    it('has a gate height', function() {
      assert.equal(gate.gateHeight, 15);
    });

    it('has a canvas width', function() {
      assert.equal(gate.canvasWidth, viewPort.width);
    });

  });

  context('update y value', function() {

    var viewPort = new ViewPort(300, 200)
    var gate = new Gate({ y: 100,
                          gateHeight: 15,
                          gateStart: 50,
                          gateEnd: 100,
                        }, viewPort);

    it('will update its y position based on the game speed', function() {
      assert.equal(gate.y, 100);
      gate.update(10, viewPort)
      assert.equal(gate.y, 90)
    });

    it('will update its y position based on the super fast game speed', function() {
      assert.equal(gate.y, 90);
      gate.update(50, viewPort)
      assert.equal(gate.y, 40)
    });

    it('will update its y position based on the super slow game speed', function() {
      assert.equal(gate.y, 40);
      gate.update(1, viewPort)
      assert.equal(gate.y, 39)
    });

    it('will recycle to the bottom of the screen if it runs > gateHeight pixels past the top of the viewport', function() {
      assert.equal(viewPort.height, 300);
      assert.equal(gate.gateHeight, 15);
      gate.y = -16
      assert.equal(gate.y, -16)

      gate.update(0, viewPort)

      assert.equal(gate.y, viewPort.height)
    });

    it('will generate a new gate position when it recycles to the bottom', function() {
      var gate = new Gate({ y: -15,
                            gateHeight: 15,
                            gateStart: 50,
                            gateEnd: 100,
                          }, viewPort);

      assert.equal(gate.gateStart, 50);
      assert.equal(gate.gateEnd, 100)

      gate.update(1, viewPort)

      assert.notEqual(gate.gateStart, 50)
      assert.notEqual(gate.gateEnd, 100)
    });

  });

  context('recycle gates', function() {

    var viewPort = new ViewPort(300, 200)
    var gate = new Gate({ y: 100,
                          gateHeight: 15,
                          gateStart: 50,
                          gateEnd: 100,
                        }, viewPort);

    it('will recycle to the bottom of the screen if it runs > gateHeight pixels past the top of the viewport', function() {
      assert.equal(viewPort.height, 300);
      assert.equal(gate.gateHeight, 15);
      gate.y = -16
      assert.equal(gate.y, -16)

      gate.update(0, viewPort)

      assert.equal(gate.y, viewPort.height)
    });

    it('will generate a new gate position when it recycles to the bottom', function() {
      var gate = new Gate({ y: -15,
                            gateHeight: 15,
                            gateStart: 50,
                            gateEnd: 100,
                          }, viewPort);

      assert.equal(gate.gateStart, 50);
      assert.equal(gate.gateEnd, 100)

      gate.update(1, viewPort)

      assert.notEqual(gate.gateStart, 50)
      assert.notEqual(gate.gateEnd, 100)
    });

  });

});
