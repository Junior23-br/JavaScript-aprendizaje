//Imprimir por consola tu nombre si una variable toma su valor
let myNa = "Davidd"
if(myNa == "David") {
    console.log(myNa)
} else{
    console.log("Nombre no tomado por variable")
}

//Imprimir un msj si el usuario y contraseña coinciden con unos establecidos
const usuario = "Val"
const contrasena = 2307
if (usuario == "Val" && contrasena == 2307) {
    console.log("Datos coincididos")
} else {
    console.log("Los datos no coinciden")
}

//Indicar si una persona puede votar, e indica cuantos años le falta

let edad = 4
if (edad >= 18) {
    console.log("Apto para votar")
} else {
    console.log("No apto para votar, le faltan " + (18-edad) +" años para votar")
}

//Usar el operador ternario para asignar si una persona es adulto o menor

let adult = "adulto"
let men = "menor"
let edadd = 18
if(edadd >=18) {
    console.log(`La persona es asignada como un ${adult}`)
}else {
    console.log(`La persona es asignada como un ${men}`)
}

//Mostrar en que estacion nos encontramos dependiendo del valor de 
//una variable mes
let mes = "Septiembre"
let estacion
switch(mes) {
    case "Enero" :
        estacion ="Invierno"
        break
    case "Marzo" :
        estacion ="primavera" 
        break
    case "Junio":
        estacion="verano"
        break
    case "Septiembre" :
        estacion ="otoño"
        break
    default :
    console.log("No definido")                
}
console.log(estacion)
//Mostrar la cantidad de dias de un mes
if(mes == "Enero" || mes == "Marzo" || mes == "Mayo") {
    console.log("Sus dias son 31")
} else if (mes == "Abril" || mes =="Junio" || mes == "Septiembre") {
    console.log("Tiene 30 días")
} else {
    console.log("Tiene otra cantidad de días")
}

//Verificar si un numero es positivo, negativo o cero
const number = 12
if(number >0 ) {
    console.log("Numero positivo")
} else if(number==0) {
    console.log("Numero cero")
} else {
    console.log("Numero negativo")
}
//Mensaje de saludo dependiendo el idioma
let idioma = "Español"
let message
switch(idioma) {
    case "Ingles" :
        message = "Hi, bro"
        break
    case "Español" :
        message = "Hola hermano!"
        break
    case  "Portugues":
        message = "Tudo bem"
        break
    default :
    message ="Idioma no especficado"            
}
console.log(message)
