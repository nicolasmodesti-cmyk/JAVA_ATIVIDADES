let numeros = [];
for (let i = 0; i < 4; i++) {
    numeros.push(parseInt(prompt(`Digite o ${i+1}º valor inteiro:`)));
}
numeros.sort((a, b) => b - a);
console.log("Ordem decrescente: " + numeros.join(", "));