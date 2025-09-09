import registrar, { Contadores } from './utilidades.js';

let contador= new Contadores(0,0,0,0);

//Creacion de variales globales botones
const btnAbrir = document.getElementById("btnAbrir");
const btnCerrar = document.getElementById("btnCerrar");
const btnAuto = document.getElementById("btnAutomovil");
const btnBus = document.getElementById("btnBuses");
const btnCamion = document.getElementById("btnCamiones");

//Creacion de variales globales etiquetas
const txtAuto = document.getElementById("txtAutomovil");
const txtBuses = document.getElementById("txtBuses");
const txtCamion = document.getElementById("txtCamiones");
const txtTotal = document.getElementById("txtTotal");
let estado=false;

btnAbrir.addEventListener("click",
    function(){
        if (!estado) {
            estado=true;
            //Habitar botones
            btnAbrir.disabled = true;
            btnCerrar.disabled = false;
            btnAuto.disabled = false;
            btnBus.disabled = false;
            btnCamion.disabled = false;

            //Inicia valores de etiquetas
            txtAuto.value="0";
            txtBuses.value="0";
            txtCamion.value="0";
            txtTotal.value="0";

            //Advierte del inicio de la app
            Swal.fire("Listo","El sistema abre correctamente","success");
            
        }
        

    }
)

btnCerrar.addEventListener("click",
    function(){

    }
)

btnAuto.addEventListener("click",
    function() {
        const vehiculoRegistro = registrar("txtAutomovil");
        
        //Escribir registro
        contador.auto+=1;
        txtAuto.value=contador.auto;

        //Escribo el total
        contador.total+=5000;
        txtTotal.value=contador.total;

        //Escribir el log
        registro(vehiculoRegistro);
    }
)

btnBus.addEventListener("click",
    function() {
        const vehiculoRegistro = registrar("txtBuses");
        
        //Escribir registro
        contador.bus+=1;
        txtBuses.value=contador.bus;

        //Escribo el total
        contador.total+=10000;
        txtTotal.value=contador.total;

        //Escribir el log
        registro(vehiculoRegistro);
    }
)

btnCamion.addEventListener("click",
    function(){
        const vehiculoRegistro = registrar("txtCamiones");
        //Escribir registro
        contador.camion+=1;
        txtCamion.value=contador.camion;

        //Escribo el total
        contador.total+=15000;
        txtTotal.value=contador.total;

        //Escribir el log
        registro(vehiculoRegistro);
    }
)

function registro(vehiculo){
    console.log(vehiculo);
    let fila = document.createElement("tr");
    vehiculo.forEach(item =>{
        let columna = document.createElement("td");
        columna.textContent=item
        fila.appendChild(columna);
    });
    let lista = document.getElementById("lista");
    lista.appendChild(fila);

}