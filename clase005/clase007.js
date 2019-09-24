var esIngresoValido = false;
var esAlumno = "";
do {
    var nombreIngresa = prompt("Ingresa tu nombre:");

    var nombre = parseInt(nombreIngresa);

    esAlumno = prompt("Es alumno de Acamica(SI o NO): ");

    var alumno = parseInt(esAlumno);

    esIngresoValido = ((typeof(nombre) !== "number") ? true : false) && ((typeof(alumno) !== "number") ? true : false)
    console.log(typeof(nombreIngresa));

} while (!esIngresoValido)

(esAlumno == "SI") ? console.log("Es alumno") : console.log("No es alumno")



// ------------------------------------------------------

var esIngresoValido = false;
var dia = 0;
var mes = 0;
do {
    var ingresaDia = prompt("Día:");

    dia = parseInt(ingresaDia);

    var ingresaMes = prompt("Mes: ");

    mes = parseInt(ingresaMes);

    esIngresoValido = ((typeof(dia) == "number") ? true : false) && ((typeof(mes) == "number") ? true : false)
    console.log(typeof(nombreIngresa));

} while (!esIngresoValido)

((mes == 3 && dia >= 21 ) || (mes == 4 && dia <= 20 ) ) ? console.log("Es aries") : false // 21/03 al 20/04 aries

