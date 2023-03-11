/*Con ayuda de la función prompt y la condicional if pedir datos al usuario que
permitan resolver los siguientes algoritmos:
Se desea escribir un algoritmo que pida la altura de una persona, si la altura es menor
o igual a 150 cm envíe el mensaje: “Persona de altura baja”; si la altura está entre 151cm
y 170cm escriba el mensaje: “Persona de altura media” y si la altura es mayor al 171
escriba el mensaje: “Persona alta”.*/
let altura = parseInt(prompt ("Digite la altura en cm"))
if (altura <= 150){
    console.log ("La altura de la persona es:"+ " "+ altura + " Persona de altura baja")
} else if (altura > 150 && altura <= 170) {
    console.log ("La altura de la persona es:"+ " "+ altura + " Persona de altura media")
  } else if (altura > 170) {
    console.log ("La altura de la persona es:"+ " "+ altura + " Persona de altura alta")
  } else {
    console.log ("La altura ingresada no es válida")
  }


