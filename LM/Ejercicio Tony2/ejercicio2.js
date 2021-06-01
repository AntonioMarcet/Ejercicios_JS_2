'use strict'

document.addEventListener("load", cargaTxT());

function cargaTxT()
{
    let xhr = new XMLHttpRequest;

    xhr.open("GET", "texto.txt", true);
    xhr.send();

    xhr.onreadystatechange = function ()
    {
        if(xhr.readyState == 4 && xhr.status == 200)
        {
            let texto = this.responseText;

            let lineas = texto.split('\n');

            crearChat(lineas);
        }
    }
}

let contenedor = document.querySelector(".contenedor");

function crearChat(lineas)
{
    let cuadroTextos = document.createElement("blockquote");
    

    for (let i=0; i<lineas.length; i++)
    {
        let mensaje = document.createElement("p");
        mensaje.textContent = lineas[i];

        if (i % 2 != 0)
        {
            // mensaje.style.marginleft = "300px";
            mensaje.classList.add("left-side");
        }
        else
        {
            // mensaje.style.marginLeft = "500px";
            mensaje.classList.add("right-side");
        }

        mensaje.style.visibility = "hidden";
        
        cuadroTextos.appendChild(mensaje);
    }

    contenedor.appendChild(cuadroTextos);

    let mensajes = cuadroTextos.getElementsByTagName("p");

    function vuelveVisible(linea)
    {
        linea.style.visibility = "visible";
    }

    for (let i=0; i<mensajes.length; i++)
    {
        setTimeout(vuelveVisible, 2000 * i, mensajes[i]);
    }
}



