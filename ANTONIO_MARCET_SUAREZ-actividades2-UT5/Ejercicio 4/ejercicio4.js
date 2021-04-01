function CalculaImpuestoHacienda(empleado)
{
    let impuestoHacienda = (empleado[1] * empleado[2]) * 20 / 100;

    return impuestoHacienda;
}

function CalculaImpuestoSS(empleado)
{
    let impuestoSS = (empleado[1] * empleado[2]) * 8 / 100;

    return impuestoSS;
}

function MuestraDatos(...empleados)
{
    for (let i in empleados)
    {
        let [nombre, salarioBruto, horasTrabajadas] = empleados[i];
        console.log("Nombre: " + nombre + 
                    "\nSalario Bruto Semanal: " + (salarioBruto * horasTrabajadas) + " euros" +
                    "\nImpuesto de Hacienda: " + CalculaImpuestoHacienda(empleados[i]) + " euros" +
                    "\nImpuesto Seguridad Social: " + CalculaImpuestoSS(empleados[i]) + " euros" +
                    "\nSalario Neto: " + ((salarioBruto * horasTrabajadas) - (CalculaImpuestoHacienda(empleados[i]) + CalculaImpuestoSS(empleados[i]))) + " euros\n");
    }
}

MuestraDatos(["María Gomez", 40, 10],["Juan Perez", 40, 9],["Miguel Suarez", 40, 8]);


