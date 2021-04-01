
function funcion(cadena, booleano, funcion2, arrayInt) 
{

    if (!((typeof cadena == "string") && (typeof booleano == "boolean") && (typeof funcion2 == "function") && (Array.isArray(arrayInt)))) 
    {
        console.log("Datos incorrectos");
    } 
    else 
    {
        let producto = 1;
        if (booleano == true)
        {
            arrayInt.forEach(num => producto *= num);

            if (producto >= 100)
            {
                if (cadena.includes("a"))
                {
                    console.log("La letra 'a' no está permitida");
                }
                else
                {
                    console.log("Muy bien, no has usado la 'a'");
                }
            }
            else
            {
                console.log("El resultado de tu array es insuficiente para comprobar la cadena");
            }
        }
        else
        {
            funcion2();
        }
    }
}


let cadena = "Horroroso";
let booleano = false;
function funcion2() {console.log("¡Maravíllate! Esta es la segunda función")};
let arrayInt = [5,8,24,87,1,25];



funcion(cadena, booleano, funcion2, arrayInt);
funcion(1, true, funcion2, arrayInt);