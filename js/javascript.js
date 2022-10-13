/* Proyecto realizado por: José A. Rodríguez López-->
 * Fecha: 13/10/2022
 */

/*Define el escuchador del evento click en <svg id="icono_buscar">*/
buscar=document.getElementById("icono_buscar");
buscar.addEventListener("click", buscarPalabra, false);

/*Define el escuchador del evento click en <a id="cerrar_navegador">*/
cerrar=document.getElementById("cerrar_navegador");
cerrar.addEventListener("click", cerrarNavegador, false);

/*Función que realiza el cierre del navegador*/
function cerrarNavegador(){
    window.close();
}

function buscarPalabra(){
    //Palabra a buscar.
    let palabraBuscar=document.getElementById("input_buscar").value.trim();
    console.log(palabraBuscar+" "+palabraBuscar.length);
    
    if(palabraBuscar.length>0){
        let divs=document.getElementById("texto");
        console.log("hola")
    }else{
        
    }
}