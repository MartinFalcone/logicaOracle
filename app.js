let numeroSecreto = 6
let numeroUsuario = prompt("Dime un numero para adivinar");

console.log(numeroUsuario);

if (numeroUsuario == numeroSecreto){
    alert(`acertaste el numero ${numeroSecreto}` );
} else {
    alert("no acertaste el numero");
}
