let letra = prompt("Digite uma letra:").toLowerCase();
let vogais = ['a', 'e', 'i', 'o', 'u'];
if (vogais.includes(letra)) {
    console.log("É uma vogal.");
} else {
    console.log("É uma consoante.");
}