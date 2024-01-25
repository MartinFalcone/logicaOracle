// let numeroSecreto = 6
// let numeroUsuario = prompt("Dime un numero para adivinar");

// console.log(numeroUsuario);

// if (numeroUsuario == numeroSecreto){
//     alert("acertaste el numero");
// } else {
//     alert(`no acertaste el numero ${numeroUsuario}`)
// }



let porcentajeDescuento = 0;

let cantidadMillas = prompt("Ingrese la cantidad de millas");

if (cantidadMillas > 30000) {
    porcentajeDescuento = 20;	
} else if (cantidadMillas > 5000) {
    porcentajeDescuento = 10;	
} else {
    porcentajeDescuento = 0;
}

alert(porcentajeDescuento)
