/* Proyecto realizado por: José A. Rodríguez López-->
 * Fecha: 13/10/2022
 */

const inicioMarcado="<rojonegrita>"; //Inicio del marcado para el tratamiento CSS.
const finMarcado="</rojonegrita>"; //Fin del marcado para el tratamiento CSS.
let contadorPalabras=0; //Contador de palabras.

/*Define la variable que hace referencia al <input id="notificaciones">*/
let notificaciones=document.getElementById("notificaciones");

/*Define el escuchador del evento click en <svg id="icono_buscar">*/
let buscar=document.getElementById("icono_buscar");
buscar.addEventListener("click", buscarPalabra, false);

/*Define el escuchador del evento focus en <input id="input_buscar>"*/
let entradaTexto=document.getElementById("input_buscar");
entradaTexto.addEventListener("focus", seleccionarContenido, false);

/*Define el escuchador del evento click en <a id="cerrar_navegador">*/
let cerrar=document.getElementById("cerrar_navegador");
cerrar.addEventListener("click", cerrarNavegador, false);

/*Define el escuchador del evento keydown en <input id="input_buscar>"*/
entradaTexto.addEventListener("keydown", comprobarEnter, false);

/*Establece el foco en el <input id="input_buscar> al cargar la página*/
window.onload=function(){
    buscar.select();
}

/*Función que comprueba que se ha pulsado la tecla Enter en el <input id="input_buscar>" con lo que lanza el proceso de busqueda de forma similar a hacer click sobre el icono de la lupa*/
function comprobarEnter(evento){
    if(evento.keyCode===13){
        buscarPalabra();
    }
}

/*Función que realiza el cierre del navegador*/
function cerrarNavegador(){
    window.close();
}

/*Función que selecciona el contenido de <input id="input_buscar> al tomar el foco*/
function seleccionarContenido(){
    entradaTexto.select();
}

/*Función que realiza la busqueda de la cadena de caracteres dentro del texto*/
function buscarPalabra(){
    //Palabra a buscar.
    let palabraBuscar=document.getElementById("input_buscar").value.trim();
       
    if(palabraBuscar.length>0){
        contadorPalabras=0;
        var textos=document.querySelectorAll("#texto div");
        textos.forEach(elemento => {
            let texto=elemento.innerHTML.trim();
            if(texto.includes(inicioMarcado)){
                texto=borrar_etiquetas(texto)
            }
            if(texto.includes(palabraBuscar)){
                texto = buscar_Y_marcar(texto, palabraBuscar)
            }
            elemento.innerHTML=texto;
        });
        if(contadorPalabras>0) {
            notificaciones.value=`La cadenas de caracteres buscada existe ${contadorPalabras} veces en el texto.`;
        }else{
            notificaciones.value="La cadena de caracteres buscada no existe en el texto.";
        }
    }
}

/*Función que realiza la busqueda del texto y realiza el marcado para tramiento CSS*/
function buscar_Y_marcar(texto, palabraBuscar){
    let indiceInicio=0;
    while(texto.indexOf(palabraBuscar,indiceInicio)!=-1){
        let indiceFinal=texto.indexOf(palabraBuscar,indiceInicio);
        texto=texto.substring(0,indiceFinal)+inicioMarcado+palabraBuscar+finMarcado+texto.substring(indiceFinal+palabraBuscar.length);
        indiceInicio=indiceFinal+inicioMarcado.length+finMarcado.length+palabraBuscar.length;
        contadorPalabras++;
    }
    console.log(texto);
    return texto;
}

/*Función que realiza el borrado de las etiquetas de marcado CSS*/
function borrar_etiquetas(texto){
    texto=texto.replaceAll(inicioMarcado,"");
    texto=texto.replaceAll(finMarcado,"");
    return texto;
}