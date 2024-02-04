import { ModeloPieza } from '../componentes/clases'
import { panel } from "./panel.js";

const nuevaPieza = new ModeloPieza()

panel.nuevaPieza = nuevaPieza

panel.insertarPieza(panel.nuevaPieza)

panel.pintaPanel()