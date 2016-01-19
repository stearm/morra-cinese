var assert = require('chai').assert;
var MorraCinese = require('../app/morra-cinese');

describe("Morra cinese logic", function(){
  it("should return 1 (player wins with sasso)", function(){
    assert.equal(MorraCinese.playLogic('sasso', 'forbice'), 1);
  });
  it("should return 2 (CPU wins with carta)", function(){
    assert.equal(MorraCinese.playLogic('sasso', 'carta'), 2);
  });
  it("should return 1 (player wins with forbice)", function(){
    assert.equal(MorraCinese.playLogic('forbice', 'carta'), 1);
  });
  it("should return 0 (draw)", function(){
    assert.equal(MorraCinese.playLogic('sasso', 'sasso'), 0);
  });
  it("should return an error, because of invalid input", function(){
    assert.equal(MorraCinese.playLogic('wr0ng', 'sasso'), -1);
  });
});
