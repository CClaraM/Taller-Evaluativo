export default function registrar(tipo){
    let vehiculo=[];
    let tarifa=null;
    let etiqueta=null;

    const timestamp = Date.now();
    let fecha = new Date(timestamp);
    
    if (tipo=="txtAutomovil") {
        tarifa=5000
        etiqueta="Automovil"
    } else if (tipo=="txtBuses") {
        tarifa=10000
        etiqueta="Bus"
    } else {
        tarifa=15000
        etiqueta="Camion"
    }
    vehiculo.push(etiqueta);
    vehiculo.push(tarifa);
    vehiculo.push(fecha.toLocaleString());
    return vehiculo;
}

export class Contadores{
    /**
     * Constructor de clase
     *  @param {int} auto 
     *  @param {int} bus
     *  @param {int} camion  
     */

    constructor(auto,bus,camion,total){
        this.auto = auto;
        this.bus = bus;
        this.camion = camion;
        this.total = total;
    }

}
