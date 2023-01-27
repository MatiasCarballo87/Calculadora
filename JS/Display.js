class Display {
    constructor(displayPrevio, displayActual) {
        this.displayPrevio = displayPrevio;
        this.displayActual = displayActual;
        this.calculadora = new Calculadora();
        this.tipoDeOperacion = undefined;
        this.valorPrevio = '';
        this.valorActual = '';
        this.signos = {
            sumar: '+',
            restar: '-',
            dividir: '/',
            multiplicar: '*',
            porcentaje: '%'
        }
    }

    agregarNumero(numero) {
        if(numero === '.' && this.valorActual.includes('.')) return
        this.valorActual = this.valorActual.toString() + numero.toString();
        this.imprimirDisplay();
    }

    resetear() {
        this.valorActual = '';
        this.valorPrevio = '';
        this.tipoDeOperacion = undefined;
        this.imprimirDisplay();
    }

    borrar() {
        this.valorActual = this.valorActual.toString().slice(0, -1);
        this.imprimirDisplay();
    }

    imprimirDisplay() {
        this.displayActual.textContent = this.valorActual;
        this.displayPrevio.textContent = `${this.valorPrevio} ${this.signos[this.tipoDeOperacion] || ''}`;
    }

    operar(tipoOper) {
        this.tipoDeOperacion !== 'igual' && this.calcular();
        this.tipoDeOperacion = tipoOper;
        this.valorPrevio = this.valorActual || this.valorPrevio;
        this.valorActual = '';
        this.imprimirDisplay();
    }

    calcular() {
        const valorPrevio = parseFloat(this.valorPrevio);
        const valorActual = parseFloat(this.valorActual);

        if (isNaN(valorActual) || isNaN(valorPrevio)) return
        this.valorActual = this.calculadora[this.tipoDeOperacion](valorPrevio, valorActual).toString();
    }
}

