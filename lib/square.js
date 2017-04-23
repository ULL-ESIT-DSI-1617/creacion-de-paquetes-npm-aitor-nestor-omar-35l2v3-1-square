'use strict'

var figura = require('ull-shape-aitor-nestor-omar')
var shape = figura.Shape

class Square extends Figura {
  constructor(options) {
    Shapes.Square = Square;
    super("Square",options)
    this.width = options.width;
  }
  
  getArea() {
    return Math.pow(this.width,2);
  }
}