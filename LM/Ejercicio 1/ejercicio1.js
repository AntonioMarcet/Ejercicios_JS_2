'use strict'

document.addEventListener("load", cargaXml());

function cargaXml()
{
    let xhr = new XMLHttpRequest;

    xhr.open("GET", "libros.xml", true)
    xhr.send();

    xhr.onreadystatechange = function ()
    {
        if(this.readyState == 4 && this.status == 200)
        {
            let datos = this.responseXML;
            
            let librerias = datos.getElementsByTagName("libreria");
            
            for (let i=0; i<librerias.length; i++)
            {
                crearTabla(librerias[i]);
            }
        }
    }
}

let contenedor = document.querySelector(".contenedor");

//Función genérica que crea elementos, usada principalmente para crear celdas.
function creaElementos(padre, tipo)
{
    let largo = padre.length;
    let array = new Array;

    for (let i = 0; i<largo; i++)
    {
        let elemento = document.createElement(tipo)
        array[i] = elemento;
    }

    return array;
}

function crearTabla(libreria)
{
    //Generamos, rellenamos e incertamos la cabecera de la tabla y la primer fila
    let tabla = document.createElement("table");

    let cabeceraTabla = document.createElement("thead");
    let filaCabecera = document.createElement("tr");
    let cabeceraCelda = document.createElement("th");

    tabla.appendChild(cabeceraTabla);
    cabeceraTabla.appendChild(filaCabecera);
    filaCabecera.appendChild(cabeceraCelda);

    cabeceraCelda.textContent = libreria.getElementsByTagName("nombre")[0].textContent;

    let celdasCabecera = creaElementos(libreria.getElementsByTagName("libro")[0].children, "td");

    let primeraFila = document.createElement("tr");
    let nombresCabecera = ["ISBN", "TITULO", "NIVEL PROFUNDIDAD", "AUTOR", "EDITORIAL", "FECHA PUBLICACION", "PAGINA WEB", "PRECIO"];
    
    for (let i=0; i<celdasCabecera.length; i++)
    {
        celdasCabecera[i].textContent = nombresCabecera[i];
        primeraFila.appendChild(celdasCabecera[i]);
    }
    tabla.appendChild(primeraFila);

    //Generamos tantas filas como libros tiene la libreria, y tantas celdas como hijos tiene cada libro.

    let libros = libreria.getElementsByTagName("libro");

    //Asignamos al menor precio un valor inicial exageradamente alto
    let menorPrecio = Number.MAX_VALUE;

    for (let i=0; i<libros.length; i++)
    {
        let fila = document.createElement("tr");
        let celdas = creaElementos(libreria.getElementsByTagName("libro")[0].children, "td");

        //Asignamos el texto correspondiente a cada celda.
        for (let j=0; j<celdas.length; j++)
        {
            celdas[j].textContent = libros[i].children[j].textContent;

            fila.appendChild(celdas[j]);
        }

        //Si el precio es menor que menorPrecio y que el precio del siguiente libro, pintamos la fila de verde
        if (Number(libros[i].getElementsByTagName("precio")[0].textContent) <  menorPrecio
            && Number(libros[i].getElementsByTagName("precio")[0].textContent) <
            Number(libros[i+1].getElementsByTagName("precio")[0].textContent))
        {

            menorPrecio = Number(libros[i].getElementsByTagName("precio")[0].textContent);
            fila.style.backgroundColor = '#9FF6AB';
        }
        tabla.appendChild(fila);
    }

    contenedor.appendChild(tabla);

    cabeceraCelda.setAttribute("colspan", "8");
    tabla.classList.add("table");
}




