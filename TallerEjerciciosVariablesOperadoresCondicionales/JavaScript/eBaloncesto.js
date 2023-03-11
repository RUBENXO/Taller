/*Con ayuda de la función prompt y la condicional if pedir datos al usuario que
permitan resolver los siguientes algoritmos:
Una institución deportiva necesita seleccionar un jugador para participar en el equipo
de baloncesto. Los requisitos son:
Estatura, velocidad y edad
-Si el usuario cumple con la estatura y la velocidad puede ingresar al equipo, de lo
contrario no.
-Si cumple con la condición anterior, dependiendo de la edad el usuario pasara a las
divisiones menores o al equipo profesional de mayores.
altura mayor o igual a 175
velocidad igual o mayor a 100
si tiene una edad de 18 años o mas decir en consola "pasa a ligas mayores"
si tiene una edad menor a 18 años decir en consola "pasa a ligas menores"*/

let estatura = parseInt(prompt("Digite la estatura del jugador"))
let velocidad = parseInt(prompt("Digite la velocidad del jugador"))
let edad = parseInt(prompt("Digite la edad del jugador"))

if (estatura >= 175 && velocidad >= 100) {
    if (edad >= 18) {
        console.log("Pasa a ligas mayores")
    } else  {
        console.log("Pasa a ligas menores")
    }

} else {
    console.log("No cumple los requisitos para entrar al equipo")
}