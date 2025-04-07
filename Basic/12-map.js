//CLAVE --- VALOR

//Delcaracion

let myMap = new Map()
console.log(myMap)

//Inicializarlo
myMap = new Map([
    ["name", "Mel"],
    ["email", "davidbatero.r"],
    ["age", 23]
])
console.log(myMap)

//Metodos y propiedades
//set--actualizar o agregar un elm
myMap.set("alias", "davi")
myMap.set("name", "DavidM") //Si la clave existe actualiza el valor
console.log(myMap)

//get--obtener clave
console.log(myMap.get("name"))
console.log(myMap.has("sname")) //Existe algo o no

//delete, eliminar un elm 
myMap.delete("email")
console.log(myMap)

//clear para borrar todo el mapa
myMap.clear()
console.log(myMap)

//keys
console.log(myMap.keys())
console.log(myMap.size()) //Tamaño
console.log(myMap.values())
console.log(myMap.entries())
