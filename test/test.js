var Square = require("../lib/square.js");

describe("getArea Triangle", function() {
  it("must compute the square area correctly", function() {
    let a = new Square({ width: 100 });
    var result = a.getArea();
     result.should.equal(5000);
  })
});