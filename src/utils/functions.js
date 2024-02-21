const fechaActual = new Date()
export const anioActual = fechaActual.getFullYear()

function calcularEdad(fechaNacimiento) {
    const partesFechaNacimiento = fechaNacimiento.split('/');
    const diaNacimiento = parseInt(partesFechaNacimiento[0], 10);
    const mesNacimiento = parseInt(partesFechaNacimiento[1], 10) - 1;
    const anoNacimiento = parseInt(partesFechaNacimiento[2], 10);

    const fechaNac = new Date(anoNacimiento, mesNacimiento, diaNacimiento);

    const diferencia = fechaActual - fechaNac;

    const edad = Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));

    return edad;
}

const fechaNacimiento = '06/06/1991'
export const edadCalculada = calcularEdad(fechaNacimiento)