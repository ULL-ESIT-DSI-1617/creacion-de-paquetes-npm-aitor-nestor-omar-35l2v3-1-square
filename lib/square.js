'use strict'

/**
* Creación de paquetes npm - Square
* https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-aitor-nestor-omar-35l2v3-1-square
*
* Omar Mendo Mesa
* Equipo: aitor-nestor-omar
*
*/

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

module.exports = Square;