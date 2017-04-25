# Práctica: Creación de paquetes npm
Repositorio para el módulo npm de la figura geométrica "square" (aitor-nestor-omar)

Enlace a la [práctica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/content/practicas/practicamodulestrategypattern.html)

### Creación del paquete npm Square
Para poder crear paquetes y poder subirlos a [npm](https://www.npmjs.com/), debemos darnos de alta en la plataforma. Es recomendable logearse con el mismo ID de [GitHub](https://github.com/).

* Una vez tengamos el código de la aplicación que queramos subir en forma de paquete funcionando correctamente y testeado, comprobaremos que nuestro ```package.json```esté completo.
```json
"name": "@aitor-nestor-omar/ull-shape-square-aitor-nestor-omar-35l2v3-1",
"version": "1.0.0",
"description": "Repositorio para el módulo npm de la figura geométrica square (aitor-nestor-omar)",
``` 
* Nos logeamos con nuestra cuenta de ```npm``` en nuestra terminal (sólo es necesario una vez por sesión)
```shell
$ npm adduser
```
* Para publicar el paquete, realizamos el siguiente comando dentro del repositorio donde tengamos el código del paquete que queremos subir.
```shell
npm publish
```
* Accedemos a nuestra cuenta de ```npm``` y observamos que nuestro paquete se ha subido correctamente.


### Autores de la práctica
* [Aitor Bernal Falcón](https://chinegua.github.io/)
* [Néstor García Moreno](https://nestor-gm.github.io/)
* [Omar Mendo Mesa](https://ozzrocker95.github.io/)