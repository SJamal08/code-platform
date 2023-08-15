const chai = require("chai");
const { est_croissant } = require("./est_croissant/est_croissant");
const assert = chai.assert;
var expect = chai.expect;
chai.config.truncateThreshold=0;

var tableau = [];
var tableau2 = [];
var tableau3 = [];

for (var i = 1; i < 10; i++){
  tableau.push(i);
}

for (var i = 1; i < 100; i++){
  tableau2.push(i);
}
tableau2.push(1)

for (var i = 1; i < 1000; i++){
  tableau3.push(i);
}

describe("estCroissant", function() {
  it("should test", function() {
    expect(est_croissant(tableau),"devrait retourner true").to.equal(true)
  });
  it("should test2", function() {
    expect(est_croissant(tableau2),"devrait retourner false").to.equal(false)
  });
  it("should test3", function() {
    expect(est_croissant(tableau3),"devrait retourner true").to.equal(true)
  });
});