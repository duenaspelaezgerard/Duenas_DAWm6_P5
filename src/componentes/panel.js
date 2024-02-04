import { ModeloPieza } from '../componentes/clases'
import { models } from '../componentes/model'

export const panel = {
  matriz: [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  pintaPanel: () => {
    const IDpanel = document.querySelector('#panel')
    IDpanel.innerHTML = ''

    for (let fila = 0; fila < panel.matriz.length; fila++) {
      let divFilas = '<div class="fila d-flex justify-content-center">'

      for (let columna = 0; columna < panel.matriz[fila].length; columna++) {
        let divCeldas = ''
        if (panel.matriz[fila][columna] === 0) {
          divCeldas += '<div class="celda bg-dark border-secondary"></div>'
        }
        divFilas += divCeldas
      }
      divFilas += '</div>'
      IDpanel.innerHTML += divFilas
    }
  },
  crearNuevaPieza: () => {
    const aleatorioModelo = Math.floor(Math.random() * 7)

    let ancho = models[aleatorioModelo].matriz[0]
    ancho = ancho[0].length
    console.log('ancho pieza', ancho)

    let aleatorioX
    switch (ancho) {
      case 1:
        aleatorioX = Math.floor(Math.random() * 10)
        console.log('aleatorioX', aleatorioX)
        break
      case 2:
        aleatorioX = Math.floor(Math.random() * 9)
        console.log('aleatorioX', aleatorioX)
        break
      case 3:
        aleatorioX = Math.floor(Math.random() * 8)
        console.log('aleatorioX', aleatorioX)
        break
      case 4:
        aleatorioX = Math.floor(Math.random() * 7)
        console.log('aleatorioX', aleatorioX)
        break
    }

    const pieza = new ModeloPieza(aleatorioModelo, aleatorioX, 1, 0)
    console.log('pieza ', pieza)

    return pieza
  },
nuevaPieza: null,
  insertarPieza: () => {
    console.log(panel.nuevaPieza)
    const nuevaPiezaMatriz = panel.matriz

    for (let i = 0; i < nuevaPiezaMatriz.length; i++) {
      for (let j = 0; j < nuevaPiezaMatriz[i].length; j++) {
        panel.matriz[i][j + panel.nuevaPieza.x] = nuevaPiezaMatriz[i]
      }
    }
    panel.nuevaPieza = null

    // panel.pintaPanel()
  },
  controlTeclas: () => {
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          panel.moverDra()
          break
        case 'ArrowLeft':
          panel.moverIzq()
          break
        case 'ArrowDown':
          panel.bajar()
          break
        case 'ArrowUp':
          panel.girar()
          break
      }
    })
  },
  borrarPieza: () => {
    panel.matriz = [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]

    panel.pintaPanel()
  },
  moverDra: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      panel.nuevaPieza.x++
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },
  moverIzq: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      panel.nuevaPieza.x--
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },
  bajar: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      panel.nuevaPieza.y++
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },
  iniciarMovimiento: () => {
    panel.bajar()
  }

}
