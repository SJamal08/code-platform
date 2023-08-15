const chai = require("chai");
const assert = chai.assert;
var expect = chai.expect;
chai.config.truncateThreshold=0;
const { recherche_element } = require("./recherche_element/recherche_element");


var tableau = [];
var tableau2 = [];
var tableau3 = [];

for (var i = 1; i < 10; i++){
  tableau.push(i);
}

for (var i = 1; i < 100; i++){
  tableau2.push(i);
}

for (var i = 1; i < 1000; i++){
  tableau3.push(i);
}

describe("rechercheElement", function() {
  it("should test", function() {
    expect(recherche_element(tableau, 3),"devrait retourner true").to.equal(true)
  });
  it("should test2", function() {
    expect(recherche_element(tableau2, 200),"devrait retourner false").to.equal(false)
  });
  it("should test3", function() {
    expect(recherche_element(tableau3, 555),"devrait retourner true").to.equal(true)

  });
});