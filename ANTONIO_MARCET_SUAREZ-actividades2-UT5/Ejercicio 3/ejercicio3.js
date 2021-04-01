let dato = 0;
let array = new Array();

do
{
    dato = prompt("Ingrese un número");

    if (!isNaN(dato))
    {
        if(dato % 2 == 0)
        {
            array.unshift(+dato);
        }
        else 
        {
            array.unshift(Number(dato));
        }
    }
}
while(!isNaN(dato));

function ordenar( a, b ){ return a - b; };
array.sort(ordenar);
let arrayMultiplos3 = array.filter(numero => numero % 3 == 0);

window.alert("Array original ordenado:" + array + "\n Múltiplos de 3: " + arrayMultiplos3)



