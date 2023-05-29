// Actividad Final
//Consigna: Deben rehacer el ultimo punto de la clase anterior:

//Clase 2: “Bucles o Loops” - Actividad final: “Números Pares e Impares”
//Esta vez incluyendo funciones al codigo respetando las normas SOLID

//codigo:

let numero
let i
let sumaPares
let s


function DeclararNumero(){

numero = 0

while(numero <= 0){
    numero = parseInt(prompt('Ingrese un numero entero positivo'))
    if(numero <= 0){
        console.log('El numero ingresado no es valido')
    }
}
}

function NumsPares(){
console.log (`Numeros pares de el 1 hasta el ${numero} :`)
for (let p = 1; p <= numero; p++){
if(p % 2 == 0)
console.log(p)
}
}


function NumsImpares(){
console.log(`Numeros impares desde el 1 hasta el ${numero} :`)
i = 1
while (i <= numero) {
    if (i % 2 != 0) {
        console.log(i)
    }
    i++
}
}

function SumaPar(){
sumaPares = 0
s = 0
do {
    if (s % 2 == 0) {
        sumaPares = sumaPares + s
    }
    s++
} while (s <= numero);


console.log(`La suma de los numeros pares desde el 1 hasta el ${numero} es: ${sumaPares} `)
}

function general (){
    DeclararNumero()
    NumsPares()
    NumsImpares()
    SumaPar()
}

general()


