//Mostrar un bucle que imprima datos del 1 al 20
for (let i=1; i<21; i++) {
    console.log(i)
}

//Uno que sume todos los numeros del 1 al 100 y muestre el resultado
let suma=0
for (let i=1; i<101; i++) {
    suma += i
}console.log("El valor de la suma es: "+ suma)

//Que imprima solo los numeros pares entre 1 y 50

for (let i=1; i<101; i++) {
    if(i%2==0) {
    console.log("Los numeros pares son: "+ i)
    }
}
