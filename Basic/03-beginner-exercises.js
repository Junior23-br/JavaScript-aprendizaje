// 1 COMENTARIO EN UNA LINEA
//HOLA HOLA

//2 Escribe un comentario en varias lineas
/*
Hola
Soy
Estudiante de
ingenieria
*/

 // 3 Declara variables con valores asociados a todos los datos de tipo primitivo
let cdn = "Hola cadena"
let edad = 12
let isTeacher = false
let UndefinedValue
let nullV = null
let mySymbol = Symbol("Simbolo de resis")
let meBigint = BigInt(1212121212)

//4 Imprimir todo
console.log(cdn)
console.log(edad)
console.log(isTeacher)
console.log(UndefinedValue)
console.log(nullV)
console.log(mySymbol)
console.log(meBigint)

//5 imprimir el tipo
console.log( typeof cdn)
console.log(typeof edad)
console.log(typeof isTeacher)
console.log(typeof UndefinedValue)
console.log(typeof nullV)
console.log(typeof mySymbol)
console.log(typeof meBigint)

//6 modificar los valores de las variables por otros del mismo tipo
cdn = "Ma"
edad = 20
isTeacher = true
UndefinedValue
nullV = 0
mySymbol = Symbol("Simbolo")
meBigint = BigInt(12312312412)
console.log(cdn)
console.log(edad)
console.log(isTeacher)
console.log(UndefinedValue)
console.log(nullV)
console.log(mySymbol)
console.log(meBigint)

// 7 cambiar las variables a distinto tipo de dato
cdn = 20
edad = "VA"
isTeacher = UndefinedValue
UndefinedValue = false
nullV = Symbol("simbolo")
mySymbol = null
meBigint = BigInt(12312312412)
console.log(cdn)
console.log(edad)
console.log(isTeacher)
console.log(UndefinedValue)
console.log(nullV)
console.log(mySymbol)
console.log(meBigint)

// 8 declarar variables constantes con datos primitivos
const text = "Hola cadena"
const height = 12
const isT = false
const UndefinedVal = undefined
const nullVal = null
const mSymbol = Symbol("Simbolo de popa")
const mBigint = BigInt(123456789)
console.log(text)
console.log(height)
console.log(isT)
console.log(UndefinedVal)
console.log(nullVal)
console.log(mSymbol)
console.log(mBigint)

//9 modifica los valores de las constantes
text = "Hola"
height = 13
isT = true
UndefinedVal = undefined
nullVal = null
mSymbol = Symbol("Simbol")
mBigint = BigInt(1232123321)
console.log(text)
console.log(height)
console.log(isT)
console.log(UndefinedVal)
console.log(nullVal)
console.log(mSymbol)
console.log(mBigint)

//10 Que lineas producen error?
/*
El error se produce desde la linea 88 hasta la 94 al tratar 
de modificar valores de variables constantes
*/

