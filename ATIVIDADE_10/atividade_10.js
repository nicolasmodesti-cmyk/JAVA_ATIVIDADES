
const nomeFuncionario = prompt("Digite o nome do funcionário:"); [cite: 94]
const salarioBruto = parseFloat(prompt("Digite o salário bruto:")); [cite: 95]

const taxaINSS = 0.08; [cite: 96]
const valorDesconto = salarioBruto * taxaINSS; [cite: 100]
const salarioLiquido = salarioBruto - valorDesconto; [cite: 101]

console.log("--- Folha de Pagamento ---");
console.log("Nome do Funcionário: " + nomeFuncionario); [cite: 98]
console.log("Salário Bruto: R$ " + salarioBruto.toFixed(2)); [cite: 99]
console.log("Valor do Desconto INSS (8%): R$ " + valorDesconto.toFixed(2)); [cite: 100]
console.log("Salário Líquido: R$ " + salarioLiquido.toFixed(2)); [cite: 101]