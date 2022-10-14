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
       
    if(palabraBuscar.length>0){
        var textos=document.querySelectorAll("#texto div");
        textos.forEach(elemento => {
            let texto=elemento.innerHTML.trim();
            if(texto.includes(palabraBuscar)){
                texto = buscar_Y_marcar(texto, palabraBuscar)
            }
            elemento.innerHTML=texto;
        });
    }
}

function buscar_Y_marcar(texto, palabraBuscar){
    let indiceInicio=0;
    while(texto.indexOf(palabraBuscar,indiceInicio)!=-1){
        let indiceFinal=texto.indexOf(palabraBuscar,indiceInicio);
        texto=texto.substring(0,indiceFinal)+"<rojoNegrita>"+palabraBuscar+"</rojoNegrita>"+texto.substring(indiceFinal+palabraBuscar.length);
        indiceInicio=indiceFinal+"<rojoNegita>".length+"</rojoNegrita>".length+palabraBuscar.length;
    }
    console.log(texto);
    return texto;
}

function borrar_etiquetas(texto,etiquetaInicio,etiquetaFin){
    let
}