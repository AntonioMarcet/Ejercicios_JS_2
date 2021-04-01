// Crea una función llamada verAsignaturas. Esta función va a recibir un número indeterminado de alumnos. De cada alumno va a recibir un array. En ese array estará almacenado 
// el nombre, el curso y las asignaturas de las que está matriculado (una asignatura en cada posición). Muestra por pantalla el nombre del alumno – el curso – asignaturas: y 
// el nombre de las asignaturas separadas por un /. Si el número de datos de alumnos es 0 debes mostrar la cadena “No hay datos para mostrar”. Debes usar el operador rest, la 
// desestructuración de arrays y el código lo más compacto posible.

function verAsignaturas(...alumno) 
{
    for (let i in alumno)
    {
        if (alumno[i].length === 0)
        {
            console.log("No hay datos que mostrar");
        }
        else
        {
            let [nombre, curso, ...resto] = alumno[i];
            console.log(nombre + "-" + curso + "-asignaturas:" + resto.join("/"));
        }
    }
     
}

let alumno1 = ["Paco", "DAMA", "Bases de Datos", "Programación", "FOL", "Sistemas Informáticos"];
let alumno2 = ["Tony", "DAMB", "Entornos de desarrollo", "Lenguajes de Marca", "Sistemas Informáticos"];
let alumno3 = [];

verAsignaturas(alumno1, alumno2, alumno3);

