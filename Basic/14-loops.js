//Loops o bucles
//for--
for (let i=0; i<5; i++) {
    console.log(`Hola ${i}`)
}
const numbers = [10,2,3,4,5,6,7]
for (let i=0; i<numbers.length; i++) {
    console.log(`Elemento: ${numbers[i]}`)
}

//while--evalua antes de cada iteraccion
let i =0
while (i<5) {
    console.log(`Hol ${i}`)
    i++
}
//do while--minimo 1 vez
i =6
do {
    console.log(`Holo ${i}`)

}while( i<5)

    //for of--recorrer valores de algo iterable
mySet = new Set(["Hola", 12, "David", 23, 23])
myArray = [2,3,4,5, true, "David"]
myMap = new Map([
    ["name", "Mel"],
    ["email", "davidbatero.r"],
    ["age", 23]
])

for (let valor of myArray) {
    console.log(valor)
}

//Buenas practicas
//Break y continue
for(let i=0; i<10; i++) {
    if(i==5) {
        continue //Next interaccion
    } else if (i==6){
        break //Salirse
    }
    console.log(`Hola ${i}`)
}