//Operadores
//Operadores aritmeticos
let a =5
let b= 10
console.log(a + b) //Suma
console.log(a - b) //Resta
console.log(a* b) //Multiplicacion
console.log(a / b) //Division
console.log(a ** b) //Potencia
console.log(a % b) //Modulo
a++ //Incremento
b-- //Decremento
console.log(a)
console.log(b)

//Operadores de asignacion igual que en operadores
let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)
myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2
//Operadores de comparacion
console.log(a > b)
console.log(a < b)
console.log(a == 6) //Igualdad por valor
console.log(a >= b)
console.log(a <= b)
console.log ( a === "6") //Tipo y valor
console.log (a !=6)
console.log (a !==6)
console.log (0 ==false)
console.log(1==true)
console.log(undefined == null)
console.log(undefined === null)
console.log(0 == "")

//Truthy values-- VALORES VERDADEROS
/*
Todos los numeros positivos y negativos menos el cero
Todas las cadenas de texto menos las vacias
El boolean true

//Falsy values---VALORES FALS0S
0
0n
undefined
null
el boolean false
cadenas de texto vacias
*/

//OPERADORES LOGICOS
//and
console.log(5<10 && 15<20) //DOS VERDADERAS==TRUE
console.log(5>10 && 15<20)//UNA TRUE Y UNA FALSE==FALSE
console.log(5>10 && 15>20) //DOS FALSAS= FALSAS

//or
console.log(5<10 || 15<20) //DOS VERDADERAS==TRUE
console.log(5>10 || 15<20)//UNA TRUE Y UNA FALSE==TRUE
console.log(5>10 || 15>20) //DOS FALSAS= FALSAS
console.log(5>10 && 15>20 || 30<40)

//not
console.log(!(5>10 && 15>20)) //Invierto su valor con el !
console.log(!true)

//Operadores ternarios
const isRaining = true
//Si es true ?, si no ejecuta :
isRaining  ? console.log("Esta lloviendo"): console.log("No esta lloviendo")






