const FECHA_ACTUAL = document.getElementById("fechaActual");
const FECHA_FINAL = new Date(2028, 6, 1);
const APLAZAMIENTO = "34 días"
const RESULTADO = document.getElementById("resultado");

document.getElementById("fechaFinal").value = "01/07/2028";
window.addEventListener("load", actualizarFecha);

function actualizarFecha() {
    const hoy = new Date();
    FECHA_ACTUAL.value = hoy.getDate() + "/" + (hoy.getMonth() + 1) + "/" + hoy.getFullYear();
}

function calcularRestante() {
    const hoy = new Date();

    let anyos = FECHA_FINAL.getFullYear() - hoy.getFullYear();
    let meses = FECHA_FINAL.getMonth() - hoy.getMonth();
    let dias = FECHA_FINAL.getDate() - hoy.getDate();
    console.log(anyos + " años, " + meses + " meses y " + dias + " días");

    if (dias < 0) {
        meses = meses - 1;
        dias = dias + 30
    }

    if (meses < 0) {
        anyos = anyos - 1;
        meses = meses + 12;
    }

    RESULTADO.textContent = "Faltan " + anyos + " año, " + meses + " meses y " + dias + " días para finalizar el curso. Aplazamiento: " + APLAZAMIENTO;
    document.getElementById("mostrar").hidden = false;
    document.getElementById("resultado").hidden = false;
}

function calcularRestanteAplazamiento() {
    const hoy = new Date();

    let anyos = FECHA_FINAL.getFullYear() - hoy.getFullYear();
    let meses = FECHA_FINAL.getMonth() - hoy.getMonth();
    let dias = FECHA_FINAL.getDate() - hoy.getDate() + 34;

    if (dias < 0) {
        meses = meses - 1;
        dias = dias + 30;
    }

    if (meses < 0) {
        anyos = anyos - 1;
        meses = meses + 12;
    }

    document.getElementById("resultadoAplazamiento").textContent = "Con aplazamiento, faltan " + anyos + " años, " + meses + " meses y " + dias + " días para finalizar el curso.";
    document.getElementById("resultadoAplazamiento").hidden = false;
}

const botonActualizar = document.getElementById("actualizar");
botonActualizar.addEventListener("click", actualizarFecha);

const botonCalcular = document.getElementById("calcular");
botonCalcular.addEventListener("click", calcularRestante);

const botonMostrar = document.getElementById("mostrar");
botonMostrar.addEventListener("click", calcularRestanteAplazamiento);


// console.log(new Date(2028, 7, 0))