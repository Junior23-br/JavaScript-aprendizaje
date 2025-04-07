//Set PARA ELEMENTOS UNICOS
//Declaracion
let mySet = new Set()

//Inicializarlo
mySet = new Set(["Hola", 12, "David", 23, 23])
console.log(mySet)

//Metodos comunes
//add y delete
mySet.add("Mac") //Agregar al final
console.log(mySet)
mySet.delete("David") //ELIMINAR MANDANDO POR PARAMETRO
console.log(mySet)

//has
console.log(mySet.has("David")) //Ver si algo existe 
console.log(mySet.has(23))

//size
console.log(mySet.size)

//CONVERTIR SET ARRAY
let myArray = Array.from(mySet)
console.log(myArray)

//Convertir array a set
mySet1 = new Set(myArray)
console.log(mySet1)

//Principal diferencia es que no permite duplicados 
//Por eso no importa el tema de indice
mySet.add(23)
console.log(mySet)