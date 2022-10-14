# Buscador en página
Crear una utilidad en la página que busque en el texto de los elementos <div>. Escribir la palabra a buscar y marcarla en el texto en negrita y rojo.

Notas:
La aplicación es "case sensitive" por lo que tiene importancia escribir un carácter en mayúsculas o minúsculas.
En el algoritmo utilizado se recogen en un array los elementos div contenidos en el div con id="texto". A continuación se recorre este array buscando la cadena a buscar, marcando con una etiqueta antes y después de la cadena. Mediante la hoja de estilos CSS se establecen las propiedades dentro de esta.
Al buscar una nueva cadena se eliminan las etiquetas anteriormente mencionadas para comenzar de nuevo con la busqueda y su marcado.