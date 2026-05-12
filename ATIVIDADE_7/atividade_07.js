let codigo = prompt("Informe o código do sabor (a-i):").toLowerCase();
const precos = {
    'a': 1.50, 'b': 2.50, 'c': 2.50, 'd': 3.20, 
    'e': 3.40, 'f': 3.00, 'g': 3.60, 'h': 4.00, 'i': 5.00
};

if (precos[codigo]) {
    console.log(`Preço: R$ ${precos[codigo].toFixed(2)}`);
} else {
    console.log("Código inválido.");
}