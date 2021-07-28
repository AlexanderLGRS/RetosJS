const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const difficulty = document.getElementById('difficulty')
const btnEmpezar = document.getElementById('btnEmpezar')
let streak = 0
let userScore = 0
let timeBetweenPulses = 0
let pulsesForLevel = 0
function selectDifficulty(difficulty) {
    streak = parseInt(document.getElementById('streak').value)
    switch (difficulty) {
        case "easy":
            console.log("easy");
            timeBetweenPulses = 2000
            pulsesForLevel = 1
            break;
        case "medium":
            console.log("medium");
            timeBetweenPulses = 1000
            pulsesForLevel = 1
            break;
        case "hard":
            console.log("hard");
            timeBetweenPulses = 250
            pulsesForLevel = 2
            break;

        default:
            break;
    }
}

class Juego {
    constructor() {
        this.inicializar = this.inicializar.bind(this)
        this.generarSecuencia()
        this.inicializar()
        setTimeout(this.siguienteNivel, 1000);

    }
    inicializar() {
        this.nivel = 1
        this.siguienteNivel = this.siguienteNivel.bind(this)
        this.elegirColor = this.elegirColor.bind(this)
        this.toggleBtnEmpezar()
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }
    toggleBtnEmpezar() {
        if (btnEmpezar.classList.contains('hide')) {
            btnEmpezar.classList.remove('hide')
        }
        else {
            btnEmpezar.classList.add('hide')
        }
    }
    generarSecuencia() {
        this.secuencia = new Array(streak).fill(0).map(n => Math.floor(Math.random() * 4))
        console.log(this.secuencia);
    }
    siguienteNivel() {
        this.subnivel = 0
        this.iluminarSecuencia()
        this.agregarEventosClick()
    }
    numeroAColor(numero) {
        switch (numero) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    colorANumero(color) {
        switch (color) {
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }
    iluminarSecuencia() {
        for (let i = 0; i < this.nivel; i++) {
            const color = this.numeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), timeBetweenPulses * i)
        }
    }
    iluminarColor(color) {
        this.colores[color].classList.add('light')
        setTimeout(() => this.apagarColor(color), timeBetweenPulses / 2)
    }
    apagarColor(color) {
        this.colores[color].classList.remove('light')
    }
    agregarEventosClick() {
        this.colores.celeste.addEventListener('click', this.elegirColor)
        this.colores.violeta.addEventListener('click', this.elegirColor)
        this.colores.naranja.addEventListener('click', this.elegirColor)
        this.colores.verde.addEventListener('click', this.elegirColor)
    }
    eliminarEventosClick() {
        this.colores.celeste.removeEventListener('click', this.elegirColor)
        this.colores.violeta.removeEventListener('click', this.elegirColor)
        this.colores.naranja.removeEventListener('click', this.elegirColor)
        this.colores.verde.removeEventListener('click', this.elegirColor)
    }
    elegirColor(ev) {
        const nombreColor = ev.target.dataset.color
        const numeroColor = this.colorANumero(nombreColor)
        this.iluminarColor(nombreColor)
        if (numeroColor === this.secuencia[this.subnivel]) {
            console.log(`${this.secuencia[this.subnivel]} ${numeroColor} subnivel = ${this.subnivel}`);
            this.subnivel++
            if (this.subnivel === this.nivel) {
                this.nivel++
                this.eliminarEventosClick
                userScore = (this.nivel - 1) * 100
                if (this.nivel === streak + 1) {
                    this.ganar()
                }
                else {
                    setTimeout(this.siguienteNivel, 2000)
                }
            }
        }
        else {
            this.perder()
        }

    }
    ganar() {
        // swal('FELICIDADES', 'GANASTE!', 'success')
        //     .then(this.inicializar)

        swal({
            title: "FELICIDADES",
            text: "Lograste llegar a tu meta con " + userScore + " puntos \n  \n ¿Quieres jugar de nuevo?",
            icon: "success",
            buttons: true,
            dangerMode: true,
        })
            .then((newGame) => {
                if (newGame) {
                    location.reload()
                } else {
                    swal("Entendemos que tengas más cosas que hacer", "pero esperamos verte pronto", "info");
                }
            });
    }
    perder() {
        // swal('LO LAMENTAMOS', 'PERDISTE!', 'error')
        //     .then(() => {
        //         this.eliminarEventosClick()
        //         this.inicializar()
        //     })
        swal({
            title: "Ups",
            text: "No llegaste a tu meta pero lograste " + userScore + " puntos \n  \n ¿Quieres jugar de nuevo?",
            icon: "error",
            buttons: true,
            dangerMode: true,
        })
            .then((newGame) => {
                if (newGame) {
                    location.reload()
                } else {
                    swal("Entendemos que tengas más cosas que hacer", "pero esperamos verte pronto", "info");
                }
            });
    }

}
function empezarJuego() {
    var juego = new Juego()
    difficulty.style.visibility = "hidden";
}