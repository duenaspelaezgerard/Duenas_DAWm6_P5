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
    console.log()
    IDpanel.innerHTML = ''
    let color = ''
    switch (panel.nuevaPieza.modelo) {
      case 0:
          color = 'rgb(64, 230, 64)';
          break;
      case 1:
          color = 'rgb(255, 255, 0)';
          break;
      case 2:
          color = 'purple';
          break;
      case 3:
          color = 'red';
          break;
      case 4:
          color = 'aqua';
          break;
      case 5:
          color = 'rgb(255, 182, 47)';
          break;
      case 6:
          color = 'rgb(255, 190, 201)';
          break;
  }
    for (let fila = 0; fila < panel.matriz.length-1; fila++) {
      let divFilas = '<div class="fila d-flex justify-content-center">'

      for (let columna = 1; columna < panel.matriz[columna].length-1; columna++) {
        let divCeldas = ''
        if (panel.matriz[fila][columna] === 0) {
          divCeldas += '<div class="celda bg-dark border-secondary"  ></div>'
        }else{
          divCeldas = `<div class="celda border-secondary" style="background-color: ${color};"></div>`;
        }
        divFilas += divCeldas
      }
      divFilas += '</div>'
      IDpanel.innerHTML += divFilas
    }
  },

  crearNuevaPieza: () => {
    const aleatorioModelo = Math.floor(Math.random() * 7)

    let ancho = models[aleatorioModelo].pieza[0]
    ancho = ancho[0].length

    let aleatorioX
    switch (ancho) {
      case 1:
        aleatorioX = Math.floor(Math.random() * 10) + 1
        break
      case 2:
        aleatorioX = Math.floor(Math.random() * 9) + 1
        break
      case 3:
        aleatorioX = Math.floor(Math.random() * 8) + 1
        break
      case 4:
        aleatorioX = Math.floor(Math.random() * 7) + 1
        break
    }

    const pieza = new ModeloPieza(aleatorioModelo, aleatorioX, 1, 0)

    return pieza
  },

  nuevaPieza: null,

  insertarPieza: () => {
    for (let i = 0; i < panel.nuevaPieza.altura; i++) {
      for (let j = 0; j < panel.nuevaPieza.longitud; j++) {
        if(panel.nuevaPieza.matriz[i][j]==1){
          panel.matriz[panel.nuevaPieza.y+i][panel.nuevaPieza.x+j] = panel.nuevaPieza.matriz[i][j]
        }
      }
    }
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
          panel.borrarPieza()
          panel.nuevaPieza.girar()
          break
      }
    })
  },

  borrarPieza: () => {
    for (let i = 0; i < panel.nuevaPieza.altura; i++) {
      for (let j = 0; j < panel.nuevaPieza.longitud; j++) {
        if(panel.nuevaPieza.matriz[i][j]==1){
          panel.matriz[panel.nuevaPieza.y+i][panel.nuevaPieza.x+j] = 0
        }
      }
    }
  },

  moverDra: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      if((panel.nuevaPieza.x+panel.nuevaPieza.longitud) < 11){
        panel.nuevaPieza.x++
      }
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },

  moverIzq: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      if(panel.nuevaPieza.x > 1){
        panel.nuevaPieza.x--
      }
      panel.insertarPieza()
      panel.pintaPanel()
    }
  },

  bajar: () => {
    if (panel.nuevaPieza) {
      panel.borrarPieza()
      // console.log('La y:', panel.nuevaPieza.y)
      // console.log('QUE HAY ABAJO DE LA Y', panel.matriz[panel.nuevaPieza.y+1][panel.nuevaPieza.x])
      // console.log('La x:', panel.nuevaPieza.x)
      // console.log('QUE HAY ABAJO DE LA X', panel.matriz[panel.nuevaPieza.y][panel.nuevaPieza.x+1])
      
      // for (let i = 0; i < panel.nuevaPieza.altura; i++) {
      //   for (let j = 0; j < panel.nuevaPieza.longitud; j++) {
      //     if(panel.nuevaPieza.matriz[i][j]==1){
      //       panel.matriz[panel.nuevaPieza.y+i][panel.nuevaPieza.x+j] = 0
      //     }
      //   }
      // }

      // if((panel.matriz[panel.nuevaPieza.y+1][panel.nuevaPieza.x])==0){
      //   if((panel.matriz[panel.nuevaPieza.y][panel.nuevaPieza.x+1])==0){
          

      //   }
      // }
      if((panel.nuevaPieza.y+panel.nuevaPieza.altura) < 21){
        panel.nuevaPieza.y++
      }
      panel.insertarPieza()
      panel.pintaPanel()
      if((panel.nuevaPieza.y+panel.nuevaPieza.altura)==panel.matriz.length-1){
        panel.nuevaPieza=panel.crearNuevaPieza()
      }
    }
  },

  iniciarMovimiento: () => {
    setInterval(() => {
      panel.bajar();
    }, 1000); 
  }

}
