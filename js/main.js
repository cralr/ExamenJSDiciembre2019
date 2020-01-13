/**
 * @author Rafael Miguel Cruz Álvarez
 */

{
   
    let ventanaInfo;

   let init = function() {
       let enlaceInfo = document.getElementById("enlace");
   
       enlaceInfo.addEventListener("click",crearVentanaInfo);
    }

    let crearVentanaInfo = function() {
        ventanaInfo = window.open();
        ventanaInfo.document.open();
        ventanaInfo.document.write(`
        <!<!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="author" content="Rafael Miguel Cruz Álvarez">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <script src="js/informa.js"></script>
            <title>RAFAEL MIGUEL CRUZ ÁLVAREZ</title>
        </head>
        <body>
            <noscript>
                <h1>Esta p&aacute;gina requiere el uso de JavaScript</h1>
            </noscript>

            <header>
                <h1>Rafael Miguel Cruz Álvarez</h1>
                <h2>Examen 2019</h2>
                <h3>Información</h3>
            </header>

            <input type="submit" value="Informar">
            <input type="submit" id="cerrar" value="Salir">

        </body>
        </html>
        `);
        ventanaInfo.document.close();
    }


    document.addEventListener("DOMContentLoaded",init);
} 