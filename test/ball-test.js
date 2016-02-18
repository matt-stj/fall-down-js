const assert = require('chai').assert;
const Ball = require('../lib/ball');
const sinon = require('sinon/pkg/sinon');


describe('Ball', function() {

  context('with default attributes', function() {

    var ball = new Ball({ width: 1000, height: 600 }, {});

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 500);
    });

    it('should assign a radius', function() {
      assert.equal(ball.r, 8);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 9);
    });

    it('should assign a sAngle', function(){
      assert.equal(ball.sAngle, 0);
    });

    it('should assign a eAngle', function(){
      assert.equal(ball.eAngle, 2 * Math.PI);
    });
  });

  describe('with other values', function() {

    var ball = new Ball({ width: 1000,
                          height: 600
                          }, { r: 15,
                             x: 20,
                             y: 30,
                             sAngle: 20,
                             eAngle: 40
                          });

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 20);
    });

    it('should assign a radius', function() {
      assert.equal(ball.r, 15);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 30);
    });

    it('should assign a sAngle', function(){
      assert.equal(ball.sAngle, 0);
    });

    it('should assign a eAngle', function(){
      assert.equal(ball.eAngle, 2 * Math.PI);
    });
  });

  describe('with zero radius', function() {

    var ball = new Ball({ width: 1000, height: 600 }, { r: 0 });

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 500);
    });

    it('should assign a radius', function() {
      assert.equal(ball.r, 8);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 9);
    });

    it('should assign a sAngle', function(){
      assert.equal(ball.sAngle, 0);
    });

    it('should assign a eAngle', function(){
      assert.equal(ball.eAngle, 2 * Math.PI);
    });
  });

  describe('will override angle options', function() {

    var ball = new Ball({ width: 1000, height: 600 }, { sAngle: 10, eAngel:2 });

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 500);
    });

    it('should assign a radius', function() {
      assert.equal(ball.r, 8);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 9);
    });

    it('should assign a sAngle', function(){
      assert.equal(ball.sAngle, 0);
    });

    it('should assign a eAngle', function(){
      assert.equal(ball.eAngle, 2 * Math.PI);
    });
  });

  describe('with negative radius', function() {

    var ball = new Ball({ width: 1000, height: 600 }, { r: -10 });

    it('should assign an x coordinate', function() {
      assert.equal(ball.x, 500);
    });

    it('should assign a radius', function() {
      assert.equal(ball.r, 8);
    });

    it('should assign a y coordinate', function() {
      assert.equal(ball.y, 9);
    });

    it('should assign a sAngle', function(){
      assert.equal(ball.sAngle, 0);
    });

    it('should assign a eAngle', function(){
      assert.equal(ball.eAngle, 2 * Math.PI);
    });
  });

  describe('draw', function() {

    var ball = new Ball({width: 1000, height: 600 }, {});

    it('should be drawn with an x value', function() {
      ball.draw
      assert.equal(ball.x, 500);
      assert.equal(ball.r, 8);
      assert.equal(ball.y, 9);
    });

    it('should be drawn with a r value', function() {
      ball.draw
      assert.equal(ball.r, 8);
    });

    it('should be drawn with a y value', function() {
      ball.draw
      assert.equal(ball.y, 9);
    });

    it('should be drawn with a sAngle value', function() {
      ball.draw
      assert.equal(ball.sAngle, 0);
    });

    it('should be drawn with an eAngle value', function() {
      ball.draw
      assert.equal(ball.eAngle, 2 * Math.PI);
    });

    it('should be drawn with a keyboarder object', function() {
      ball.draw
      assert.isObject(ball.keyboarder, "keyboarder is here!");
    });
  });

  describe('update with standard inputs', function() {

    var ball = new Ball({ width: 1000, height: 600 }, {});
    ball.update(5, 0.5, true, ball.canvas)

    it("should be updated with a r value", function () {
      assert.equal(ball.x, 500);
    });

    it('should be updated with a r value', function() {
      assert.equal(ball.r, 8);
    });

    it('should be updated with a y value', function() {
      assert.equal(ball.y, 14);
    });
  });

  describe('update with enhanced game speed', function() {

    var ball = new Ball({ width: 1000, height: 600 }, {});
    ball.update(10, 0.5, true, ball.canvas)

    it("returns the return value from the original function", function () {
      assert.equal(ball.x, 500);
    });

    it('should be updated with a r value', function() {
      assert.equal(ball.r, 8);
    });

    it('should be updated with a y value', function() {
      assert.equal(ball.y, 14);
    });
  });

  describe('update with game in play off', function() {

    var ball = new Ball({ width: 1000, height: 600 }, {});
    ball.update(10, 0.5, false, ball.canvas)

    it("returns the return value from the original function", function () {
      assert.equal(ball.x, 500);
    });

    it('should be updated with a r value', function() {
      assert.equal(ball.r, 8);
    });

    it('should be updated with a y value', function() {
      assert.equal(ball.y, 14);
    });
  });

});
