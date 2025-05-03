//Prueba entregable sobre aprendido en JavaScript
//.trim para quitar el tema de espacios, isNaN validad que sea un numero
function validarPro(nameC, cantidad) {
    if(nameC.trim()=== "") {
        return "El nombre no puede estar vacio"
    }
    if(isNaN(cantidad) || cantidad <= 0) {
        return "La cantidad no puede ser inferior a 1"
    }
    return "Producto confirmado"
}
//Pruebas de validacion
console.log(validarPro("Repuesto", 2))
console.log(validarPro("Laptop", -1))
console.log(validarPro("", 4))
console.log(validarPro("","ab" ))

//Evitar duplicados
let myPr = new Set (["PC", "Laptop", "TV", "Monitor"])
function agregarSiNoExiste(nombre) {
    if(myPr.has(nombre)) {
        console.log(`El producto ${nombre} ya existe`)
    } else{
    myPr.add(nombre)
    console.log(`El producto ${nombre} ha sido agregado con exito`)
    }
}
agregarSiNoExiste("PC")
agregarSiNoExiste("Mouse")
