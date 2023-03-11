/*Un almacén de escritorios hace los siguientes descuentos: Si el cliente compra menos
de 5 unidades se le da un descuento del 10% sobre la compra; si el número de unidades
es mayor o igual a cinco pero menos de 10 se le otorga un 20% y, si son 10 o más se
le da un 40%. Hacer un algoritmo para determinar cuánto debe pagar un cliente por el
escritorio y cuánto por el descuento.*/
let escritorios = parseInt(prompt("El precio base de los escritorios son $100.000 pesos. ¿Cuantos escritorios vas a comprar?"))
let total = 100000

if (escritorios < 5) {
    console.log("Ud va a comprar:" + " " + escritorios + " escritorios de $100000," + " Recibes un descuento del 10%")
    total = total-(total*0.1)
    console.log("Total por producto:" + " $" + total + " pesos por escritorio")
    console.log("Total a pagar:"+ " $"+ total*escritorios)
} else if (escritorios >= 5 && escritorios < 10) {
    console.log("Ud va a comprar:" + " " + escritorios + " escritorios de $100000," + " Recibes un descuento del 20%")
    total = total-(total*0.2)
    console.log("Total por producto:" + " $" + total + " pesos por escritorio")
    console.log("Total a pagar:"+ " $"+ total*escritorios)
} else if (escritorios >= 10) {
    console.log("Ud va a comprar:" + " " + escritorios + " escritorios de $100000," + " Recibes un descuento del 40%")
    total = total-(total*0.4)
    console.log("Total por producto:" + " $" + total + " pesos por escritorio")
    console.log("Total a pagar:"+ " $"+ total*escritorios)
}