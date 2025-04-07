//if, else if, else
//CONDICIONALES
let age = 17
//IF---SI Y SOLO SI
if (age ==36){
    console.log("La edad es 37")
} else {
console.log("La edad no es 37")
}

// else if--- SI NO SI
if (age ==37){
    console.log("La edad es 37")
} else if(age <18) {
    console.log("Es menor de edad")
}else {
console.log("La edad no es 37")
}
//Operador ternario
const message = age ==37 ? "la edad es 37" : "La edad no es 37"
console.log(message)

//Switch caseee
let day = 10
let dayName
switch (day) {
    case 0:
        dayName ="Lunes"
        break
    case 1:
       dayName= "Martes"
       break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName= "Jueves"
        break
    case 4:
        dayName= "Viernes"
        break
    case 5:
        dayName= "Sabado"
        break
    case 6:
        dayName= "Domingo"
        break
    default :
        dayName= "Numero de día de la semana incorrecto"    
}
console.log(dayName)