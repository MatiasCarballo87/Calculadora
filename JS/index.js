
const displayPrevio = document.getElementById('v-previo');
const displayActual = document.getElementById('v-actual');
const btnNumeros = document.querySelectorAll('.numero');
const btnOperador = document.querySelectorAll('.operador');
const reset = document.getElementById('reset');
const borrar = document.getElementById('borrar');

const display = new Display(displayPrevio, displayActual);


btnNumeros.forEach(boton => {
    boton.addEventListener('click', () => display.agregarNumero(boton.innerHTML));
});
 

btnOperador.forEach(boton => {
    boton.addEventListener('click', () => display.operar(boton.value));
});

reset.addEventListener('click', () => {
    display.resetear()
});

borrar.addEventListener('click', () => {
    display.borrar()
});
