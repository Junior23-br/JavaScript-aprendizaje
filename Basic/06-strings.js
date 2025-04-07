let myName = "dAVID"
let greeting = "Hola goodd " + myName
console.log(greeting)

//Longitud
console.log(greeting.length)

//Acceso a caracter
console.log(greeting[0])
//Metodos comunes
console.log(greeting.toUpperCase()) // TODO M
console.log(greeting.toLowerCase()) //todo m
console.log(greeting.indexOf("dAVID")) //Indice palabra
console.log(greeting.includes("Hola")) //Comprueba si existe
console.log(greeting.slice(0,10)) //Recortar en un indice
console.log(greeting.replace("Hola " , " Sapo"))

//Template literals(plantillas literales)
let message = `hola
curso
de JavaScript`
let myEmail = "Davidbatero.r"
console.log(message)
console.log(`Hola, ${myName}! tu email es ${myEmail}`) // ${}--interpolar
