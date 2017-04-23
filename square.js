let Shape = require('./shapesarea.js');
class Square extends Shape {              //Square hereda de clase Shape
    constructor(options) {
      super(options)
    }
    area() {
      return  Math.pow(this.width,2)      //Retorna el área del cuadrado
    }
}
Shape.Shapes.Square = Square; 
module.exports = Square;