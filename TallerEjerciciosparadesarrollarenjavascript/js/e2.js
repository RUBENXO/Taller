/*Se tiene un triángulo rectángulo con las siguientes medidas: base=30cm, altura=20cm.
Hallar la hipotenusa del triángulo rectángulo, para ello puede hacer uso de la
función Math.sqrt( );
Tenga en cuenta que: H = raiz cuadrada(a^2 + b^2)*/
let base = parseInt(30)
let altura = parseInt(20)
let hipotenusa = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2))
console.log(`La hipotenusa del triángulo rectángulo es: ${hipotenusa} cm`)