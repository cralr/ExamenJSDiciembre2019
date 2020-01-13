/**
 * JS para mostrar hora actual
 * @author Rafael Miguel Cruz Álvarez
 */

{

    let init = function(){
        let botonCerrar = document.getElementById("cerrar");

        botonCerrar.addEventListener("click",cerrarVentana);
    }

    let cerrarVentana = function(){
        window.close();
    }

    document.addEventListener("DOMContentLoaded",init);

}