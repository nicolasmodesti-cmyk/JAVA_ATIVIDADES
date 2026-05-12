
const n1 = parseInt(prompt("Digite o primeiro número:"));
const n2 = parseInt(prompt("Digite o segundo número:"));

console.log("--- Ordenação Decrescente ---");

if (n1 > n2) {
    console.log("Ordem: " + n1 + ", " + n2);
} else if (n2 > n1) {
    console.log("Ordem: " + n2 + ", " + n1);
} else {
    console.log("Os números são iguais: " + n1);
}