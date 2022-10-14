/* Proyecto realizado por: José A. Rodríguez López-->
 * Fecha: 13/10/2022
 */

const inicioMarcado="<rojonegrita>"; //Etiqueta de inicio del marcado para el tratamiento CSS.
const finMarcado="</rojonegrita>"; //Etiqueta de fin del marcado para el tratamiento CSS.
let contadorPalabras=0; //Contador de palabras.

/*Define la variable que hace referencia al <input id="notificaciones">*/
let notificaciones=document.getElementById("notificaciones");

/*Define la variable que hace referencia al <svg id="icono_buscar">*/
let buscar=document.getElementById("icono_buscar");
/*Define el escuchador del evento click en <svg id="icono_buscar">*/
buscar.addEventListener("click", buscarPalabra, false);

/*Define la variable que hace referencia al <input id="input_buscar>"*/
let entradaTexto=document.getElementById("input_buscar");
/*Define el escuchador del evento focus en <input id="input_buscar>"*/
entradaTexto.addEventListener("focus", seleccionarContenido, false);
/*Define el escuchador del evento keydown en <input id="input_buscar>"*/
entradaTexto.addEventListener("keydown", comprobarEnter, false);

/*Define la variable que hace referencia al <a id="cerrar_navegador">*/
let cerrar=document.getElementById("cerrar_navegador");
/*Define el escuchador del evento click en <a id="cerrar_navegador">*/
cerrar.addEventListener("click", cerrarNavegador, false);


/*Establece el foco en el <input id="input_buscar> al cargar la página*/
window.onload=function(){
    entradaTexto.focus();
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
    
    //Si la cadena a buscar no está vacia.
    if(palabraBuscar.length>0){
        contadorPalabras=0;
        //Array con el contenido de cada unos de los div dentro del contenedor <div id="texto">
        let textos=document.querySelectorAll("#texto div");
        //Bucle que recorre cada elemento del array.
        textos.forEach(elemento => {
            let texto=elemento.innerHTML.trim();
            //Si el texto incluye la cadena de inicioMarcado, borra las etiquetas de marcado.
            if(texto.includes(inicioMarcado)){
                texto=borrar_etiquetas(texto)
            }
            //Si el texto incluye la cadena a buscar, realiza su marcado.
            if(texto.includes(palabraBuscar)){
                texto = buscar_Y_marcar(texto, palabraBuscar)
            }
            //Asigna el texto tras su procesado, al elemento div tratado.
            elemento.innerHTML=texto;
        });
        //¿Existe la cadena de caracteres buscada?. Mostrar notificaciones.
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
    //Mientras la cadena a buscar existe en la porción de texto tratada.
    while(texto.indexOf(palabraBuscar,indiceInicio)!=-1){
        let indiceFinal=texto.indexOf(palabraBuscar,indiceInicio);
        //Realiza el marcado.
        texto=texto.substring(0,indiceFinal)+inicioMarcado+palabraBuscar+finMarcado+texto.substring(indiceFinal+palabraBuscar.length);
        //Recalcula indiceInicio empezando tras el último marcado.
        indiceInicio=indiceFinal+inicioMarcado.length+finMarcado.length+palabraBuscar.length;
        contadorPalabras++;
    }
    return texto;
}

/*Función que realiza el borrado de las etiquetas de marcado CSS*/
function borrar_etiquetas(texto){
    //Elimina todas las cadenas inicioMarcado del texto.
    texto=texto.replaceAll(inicioMarcado,"");
    //Elimina todas las cadenas finMarcado del texto.
    texto=texto.replaceAll(finMarcado,"");
    return texto;
}