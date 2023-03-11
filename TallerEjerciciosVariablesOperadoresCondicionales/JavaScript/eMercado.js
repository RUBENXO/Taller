/*Por medio de un alert ofrecer un listado de 6 frutas diferentes. Cada una tiene un valor
diferente. Dependiendo de la fruta y la cantidad se deberá imprimir:
Nombre de la fruta (maracuya, piña, sandia, durazno, mango fresa).
Valor por unidad (maracuya = 2000, piña = 8000, sandia = 10000, durazno = 600, mango = 2000,fresa = 5000).
Valor del total de los productos comprados.*/
let maracuya = 2000
let piña = 8000
let sandia = 10000
let durazno = 600
let mango = 2000
let fresa = 5000

totalmaracuya = parseInt(prompt("¿Cuanto va a llevar de Maracuya? (Si no lleva ninguna oprima aceptar)"))
totalpiña = parseInt(prompt("¿Cuanto va a llevar de Piña? (Si no lleva ninguna oprima aceptar)"))
totalsandia = parseInt(prompt("¿Cuanto va a llevar de Sandia? (Si no lleva ninguna oprima aceptar)"))
totaldurazno = parseInt(prompt("¿Cuanto va a llevar de Durazno? (Si no lleva ninguna oprima aceptar)"))
totalmango = parseInt(prompt("¿Cuanto va a llevar de Mango? (Si no lleva ninguna oprima aceptar)"))
totalfresa = parseInt(prompt("¿Cuanto va a llevar de Fresa (Si no lleva ninguna oprima aceptar)?"))
totalfinal = 0
subtotalmaracuya = 0
subtotalpiña = 0
subtotalsandia = 0
subtotaldurazno = 0
subtotalmango = 0
subtotalfresa = 0

if (totalmaracuya > 0) {
    console.log("Ud va a comprar:" + " " + totalmaracuya + " maracuya(s)")
    console.log("Total por producto:" + " $" + maracuya + " pesos por maracuya")
    subtotalmaracuya = totalmaracuya * maracuya
    console.log("Subtotal:" + " $" + subtotalmaracuya)
    totalfinal += subtotalmaracuya
} else  {
    console.log("No lleva ninguna maracuya")
} if (totalpiña > 0) {
    console.log("Ud va a comprar:" + " " + totalpiña + " piña(s)")
    console.log("Total por producto:" + " $" + piña + " pesos por piña")
    subtotalpiña = totalpiña * piña
    console.log("Subtotal:" + " $" + subtotalpiña)
    totalfinal += subtotalpiña
} else {
    console.log("No lleva ninguna piña")
} if (totalsandia > 0) {
    console.log("Ud va a comprar:" + " " + totalsandia + " sandia(s)")
    console.log("Total por producto:" + " $" + sandia + " pesos por sandia")
    subtotalsandia = totalsandia * sandia
    console.log("Subtotal:" + " $" + subtotalsandia)
    totalfinal += subtotalsandia
}  else {
    console.log("No lleva ninguna sandia")
} if (totaldurazno > 0) {
    console.log("Ud va a comprar:" + " " + totaldurazno + " durazno(s)")
    console.log("Total por producto:" + " $" + durazno + " pesos por durazno")
    subtotaldurazno = totaldurazno * durazno
    console.log("Subtotal:" + " $" + subtotaldurazno)
    totalfinal += subtotaldurazno
}  else {
    console.log("No lleva ningun durazno")
} if (totalmango > 0) {
    console.log("Ud va a comprar:" + " " + totalmango + " mango(s)")
    console.log("Total por producto:" + " $" + mango + " pesos por mango")
    subtotalmango = totalmango * mango
    console.log("Subtotal:" + " $" + subtotalmango)
    totalfinal += subtotalmango
}  else {
    console.log("No lleva ningun mango")
} if (totalfresa > 0) {
    console.log("Ud va a comprar:" + " " + totalfresa + " fresa(s)")
    console.log("Total por producto:" + " $" + fresa + " pesos por fresa")
    subtotalfresa = totalfresa * fresa
    console.log("Subtotal:" + " $" + subtotalfresa)
    totalfinal += subtotalfresa
}  else {
    console.log("No lleva ninguna fresa")
    totalfinal = totalmaracuya+totalpiña+totaldurazno+totalmango+totalfresa
} if (totalfinal > 0) {
    console.log("Total a pagar:" + " $" + totalfinal)
}  

 else {
    totalfinal == 0
    console.log("No llevaste nada")
}