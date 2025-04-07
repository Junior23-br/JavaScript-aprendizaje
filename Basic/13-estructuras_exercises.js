//Crear un array que almacene 5 animales
let myArrayNew = []
myArrayNew= ["perro", "gato", "leon", "tigre", "leopardo"]
console.log(myArrayNew)

//Añadir dos más, uno de 1, otro de ultima
myArrayNew.push(12)
console.log(myArrayNew)
myArrayNew.unshift("perra")
console.log(myArrayNew)

//Elliminar tercera posicion
myArrayNew.splice(3,1)
console.log(myArrayNew)

//Crear un set que almacene 5 libros
let mySetn = new Set()
mySetn = new Set(["Habitos", "Padrinos", "Harry", "mm", "Moca"])
console.log(mySetn)
//Añadir dos, uno al final y uno repetido
mySetn.add("Mac") //Agregar al final
console.log(mySetn)
mySetn.add("mm")
console.log(mySetn)

//Elimina uno concreto
mySetn.delete("mm")

//Crear un mapa que asocie el numero del mes a su nombre
let myMapN = new Map()
myMapN = new Map([
    [1, "Enero"],
    [2, "Febrero"],
    [3, "Marzo"],
    [4, "Abril"],
    [5, "Mayo"]
])
console.log(myMapN)
//Comrpobar si mes 5 existe
console.log(myMapN.get(5))

//Añadir al mapa una clave con un array que almacene los meses verano
let myArray= []
myArray= ["Junio", "Julio", "Agosto"]
console.log(myArray)
let myMap = new Map()
myMap = new Map([
    ["Verano", myArray],
    ["Invierno", "Enero"],
    ["Otono", "Septiembre"],
    ["Primavera", "Marzo"]
    
])
console.log(myMap)

// Transformar el array a un set y almacenarlo en un map
mySet2 = new Set(myArray)
console.log(mySet2)
myMap.set("datosM", mySet2)
console.log(myMap)



