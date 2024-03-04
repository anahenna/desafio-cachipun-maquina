
const randomNum = generateRandomNumber();
let opcionMaquina = asignaOpcionMaquina(randomNum);

function generateRandomNumber() {
    return Math.floor(Math.random() * 3);
}

function asignaOpcionMaquina(randomNum) {
    if (randomNum === 0) {
        return "piedra";
    } else if (randomNum === 1) {
        return "papel";
    } else if (randomNum === 2) {
        return "tijera";
    } else {
        return "Invalid number";
    }
}

console.log(randomNum)
console.log(opcionMaquina)

function determinarGanador(eleccionJugador, opcionMaquina) {
    if (
        (eleccionJugador === "piedra" && opcionMaquina === "tijera") ||
        (eleccionJugador === "papel" && opcionMaquina === "piedra") ||
        (eleccionJugador === "tijera" && opcionMaquina === "papel")
    ) {
        return "¡¡Ganaste!!";
    } else if (eleccionJugador === opcionMaquina) {
        return "Empate";
    } else {
        return "¡Perdiste!"
    }

}

function jugar() {
    const rondas = prompt("¿Cúantas rondas quieres jugar?");
    const numRondas = parseInt(rondas);

    if (!(numRondas) || numRondas <= 0) {
        alert("Por favor, ingrese un número válido de rondas");
        return;
    }

    for (let i = 1; i <= numRondas; i++) {
        const eleccionJugador = prompt("Elige: piedra, papel o tijera:").toLowerCase();

        if (!['piedra', 'papel', 'tijera'].includes(eleccionJugador)) {
            alert('Por favor, elige una opción válida.');
            continue;
        }

        const opcionMaquina = asignaOpcionMaquina(generateRandomNumber());

        const resultado = determinarGanador(eleccionJugador, opcionMaquina);
        alert(`Ronda ${i}: Tú elegiste ${eleccionJugador}, la máquina eligió ${opcionMaquina}. ${resultado}`);
    }
}

