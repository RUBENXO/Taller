/*Realizar el juego piedra, papel o tijera con ayuda de las funciones y métodos vistos
en formación. En la ejecución el usuario debe ingresar una opción de juego y esta debe
ser comparada con una opción aleatoria (máquina). Imprimir en consola el mensaje
“Ganaste”, “Empataste” o “Perdiste” según sea el caso.*/
let jugador = prompt("Ingresa tu elección: piedra, papel o tijera")

let bot = Math.random()
if (bot < 0.33) {
    bot = "piedra"
} else if (bot < 0.66) {
    bot = "papel"
} else {
    bot = "tijera"
}

console.log("Jugador(a) eligió: " + jugador)
console.log("Bot eligió: " + bot)

if (jugador === bot) {
    console.log("Empataste de una manera apoteosica")
} else if (jugador === "piedra" && bot === "tijera" || jugador === "papel" && bot === "piedra" || jugador === "tijera" && bot === "papel") {
    console.log("Ganaste, totalmente inefable")
} else {
    console.log("Perdiste patico(a)")
}
