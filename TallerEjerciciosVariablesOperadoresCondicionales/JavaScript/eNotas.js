/*Con ayuda de la función prompt y la condicional if pedir datos al usuario que
permitan resolver los siguientes algoritmos:
2. Realizar un programa que pida tres notas de un alumno en las áreas de: matemáticas,
español y sociales, calcule el promedio e imprima lo siguiente:
Si el promedio es iguala a 10 mostrar "Excelente".
Si el promedio es >7 y <=10 mostrar "Bueno".
Si el promedio es <7 mostrar "Insuficiente".*/
let matematicas = parseInt(prompt ("Digite la nota de matematicas de 1 a 10"))
let español = parseInt(prompt ("Digite la nota de español de 1 a 10"))
let sociales = parseInt(prompt ("Digite la nota de sociales de 1  a 10"))
let promedio = 0

promedio = ((matematicas+español+sociales)/3)

if (promedio == 10) {
    console.log("El promedio de notas es:"+ " "+ promedio+ " Excelente") 
  } else if (promedio >= 7 && promedio <= 10) {
    console.log("El promedio de notas es:"+ " "+ promedio+ " Bueno") 
  } else if (promedio < 7) {
    console.log("El promedio de notas es:"+ " "+ promedio+ " Insuficiente") 
  } else {
    console.log ("La nota ingresada no es válida")
  }