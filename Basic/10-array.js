//Declararlo
let myArray = []
myArray = [2,3,4,5, true, "David"]
console.log(myArray)
let myArray2 = new Array()
myArray2 = new Array(3) //Reeservar
//Guardar uno por uno
myArray[6] =10
console.log(myArray)

//push y pop
myArray.push("David")
myArray.push("Davi")
myArray.push("Dav")
myArray.push("d") //Agrega
console.log(myArray)
myArray.pop() //Elimina el ultimo
console.log(myArray.shift()) //Shift devuelve el primero
myArray.unshift("Oscar", "Mat") //Agregar al inicio
console.log(myArray)
console.log(myArray.length)

//Clear
myArray = []
console.log(myArray)

//slice
myArray.push("David", "Mate", "Val", "MO")
console.log(myArray)
//devolver una copia de un pedazo particular slice
let newN = myArray.slice(1,3)
console.log(newN)
myArray.splice(1, 3) //eliminar
console.log(myArray)
