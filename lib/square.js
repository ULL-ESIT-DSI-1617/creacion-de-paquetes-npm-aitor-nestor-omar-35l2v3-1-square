'use strict'

var Figura = require('ull-shape-aitor-nestor-omar-35l2v3-1')

class Square extends Figura {
    constructor(options) {
      Figura.Shapes.Square = Square;
      super("Square", options)
      this.width = options.width;
    }
    getArea() {
      return Math.pow(this.width,2);
    }
}