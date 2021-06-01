'use strict'

//let boton = document.getElementById("boton");

document.addEventListener("load", leeXML());

function leeXML()
{
    let xhr = new XMLHttpRequest;

    xhr.open("GET", "prueba2.xml", true);
    xhr.send();

    xhr.onreadystatechange = function ()
    {
        if (this.readyState == 4 && this.status == 200)
        {
            let docXML = this.responseXML;
            console.log(docXML);

            dibujaTabla(this);
        }
    }
}

let contenedor = document.getElementById("#contenedor");

function dibujaTabla(xml)
{
    let tabla = document.createElement("table");
    let cuerpo = document.createElement("cuerpo");
    let fila = document.createElement("tr");
    let celda = document.createElement("td");

    //console.log(librerias);
}


