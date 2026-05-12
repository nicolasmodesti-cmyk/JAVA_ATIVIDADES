let soma = 0;
let continuar = true;
while (continuar) {
    let entrada = prompt("Digite um número ou 'parar' para encerrar:");
    
    if (entrada.toLowerCase() === "parar") {
        continuar = false;
    } else {
        let numero = parseFloat(entrada);
        if (!isNaN(numero)) { soma += numero; }}}
console.log("Soma total: " + soma);