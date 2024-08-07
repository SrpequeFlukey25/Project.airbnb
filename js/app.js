const reservaciones = [
    new Reservacion(new Date("2023-12-10"), "4", new Date("2023-12-14")),
    new Reservacion(new Date("2023-10-16"), "4", new Date("2023-10-20"))
];

function mostrarReservaciones() {
    let texto = " ";
    for (let reservacion of reservaciones) {
        texto += `<li>fecha de llegada:${reservacion._fechaInicio.toDateString()} numero de personas:${reservacion._numPersonas} fecha de salida:${reservacion._fechaFin.toDateString()}</li>`;
    }
    document.getElementById('reservaciones').innerHTML = texto;
}

function agregarReservacion() {
    const forma = document.forms['forma'];
    const fechaInicio = forma['fechaInicio'];
    const fechaFin = forma['fechaFin'];
    const numPersonas = forma["numPersonas"];

    if (verificarDisponibilidad(fechaInicio.value, fechaFin.value) && validarCantidadPersonas(numPersonas.value)) {
        const confirmacion = confirm("¿Estás seguro de agregar esta reservación?");
        
        if (confirmacion) {
            const reservacion = new Reservacion(new Date(fechaInicio.value), numPersonas.value, new Date(fechaFin.value));
            reservaciones.push(reservacion);
            mostrarReservaciones();
        }
    } else {
        alert("Verifica las fechas seleccionadas o la cantidad de personas. Por favor, elige otras fechas o ajusta la cantidad de personas.");
    }
}

function verificarDisponibilidad(fechaInicioNueva, fechaFinNueva) {
    const nuevaFechaInicio = new Date(fechaInicioNueva);
    const nuevaFechaFin = new Date(fechaFinNueva);

    if (nuevaFechaInicio >= nuevaFechaFin) {
        return false;
    }

    for (let reservacion of reservaciones) {
        if (
            (nuevaFechaInicio >= reservacion._fechaInicio && nuevaFechaInicio <= reservacion._fechaFin) ||
            (nuevaFechaFin >= reservacion._fechaInicio && nuevaFechaFin <= reservacion._fechaFin) ||
            (nuevaFechaInicio <= reservacion._fechaInicio && nuevaFechaFin >= reservacion._fechaFin)
        ) {
            return false;
        }
    }

    return true;
}

function validarCantidadPersonas(cantidadPersonas) {
    return parseInt(cantidadPersonas) >= 1 && parseInt(cantidadPersonas) <= 4;
}

