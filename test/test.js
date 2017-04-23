var Shape = require('../shapesarea.js');
var Square = require('../square.js');

describe("getArea", function() {
  it("Debe realizar el área del cuadrado correctamente. Objeto Shape", function() {
    let a = new Shape({ width: 100 }, 'Square');
    let s = a.getArea();
    s.should.match(/^5000$/);
  })
  it("Debe realizar el área del cuadrado correctamente. Objeto Square", function() {
    let a = new Square({ width: 100 });
    let s = a.getArea();
    s.should.match(/^5000$/);
  })
});