

function obtenerEleccionMaquina() {
    let eleccionMaquinaN = Math.floor(Math.random() * 3)
    if (
        eleccionMaquinaN = 0
    ) {
        return "piedra"
    } else if (eleccionMaquinaN = 1
    ) {
        return "papel"
    } else if (eleccionMaquinaN = 2
    ) {
        return "tijera"
    }
    return eleccionMaquinaN;
}

function determinarGanador(eleccionJugador, eleccionMaquina) {
    if (
        (eleccionJugador === "piedra" && eleccionMaquina === "tijera") ||
        (eleccionJugador === "papel" && eleccionMaquina === "piedra") ||
        (eleccionJugador === "tijera" && eleccionMaquina === "papel")
    ) {
        return "¡¡Ganaste!!";
    } else if (eleccionJugador === eleccionMaquina) {
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

        const eleccionMaquina = obtenerEleccionMaquina();
        const resultado = determinarGanador(eleccionJugador, eleccionMaquina);
        alert(`Ronda ${i}: Tú elegiste ${eleccionJugador}, la máquina eligió ${eleccionMaquina}. ${resultado}`);

    }
}

