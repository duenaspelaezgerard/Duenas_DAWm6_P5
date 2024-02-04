export const vistaJoc = {
    template:  //html
    `
        <div id="juego">
            <div class="row ">
                <div
                    class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
                >
                    <h4>Nivel: <span>2</span></h4>
                    <h4>Tiempo: <span>5:22</span></h4>
                    <h4>Lineas: <span>2</span></h4>
                    <h4>Puntos: <span>211122</span></h4>
                </div>
                <!-- Panel central -->
                <div class="col-4 d-flex justify-content-center">
                    <div id="panel" class="p-5">
                        
                    </div>
                </div>
                <div
                    class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
                >
                    <div id="piezaSiguiente">
                        <h4>Pieza siguiente:</h4>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div id="piezaGuardada">
                        <h4>Pieza guardada:</h4>
                        <div class="piezaGuardada">
                            <div class="piezaSiguiente m-2">
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,
    script : ()=>{
        
    }
}