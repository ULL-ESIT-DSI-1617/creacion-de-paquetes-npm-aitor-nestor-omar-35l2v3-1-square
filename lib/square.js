'use strict'

/**
* Creación de paquetes npm - Square
*
* https://github.com/ULL-ESIT-DSI-1617/creacion-de-paquetes-npm-aitor-nestor-omar-35l2v3-1-square
*
* Omar Mendo Mesa
*
* Equipo: aitor-nestor-omar
*
* Creación de un paquete npm con el código de la clase "Square" para el cálculo de área
*/

var Figura = require('ull-shape-aitor-nestor-omar-35l2v3-1')

class Square extends Figura {
    constructor(options) {
      Figura.Shapes.Square = Square;
      super("Square", options)
      this.width = options.width;
    }
/**
* La función getArea calcula el área de un cuadrado
* @param {Object}  hereda directamente de Figura
* @return {number} retorna el área del cuadrado
*/
    
    getArea() {
      return Math.pow(this.width,2);
    }
}

module.exports = Square;