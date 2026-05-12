
const salarioInformado = parseFloat(prompt("Digite o salário para cálculo do desconto variável:")); [cite: 106]

let taxaAplicada;
let mensagemErro = "";

if (salarioInformado <= 1000.00) { [cite: 109]
    taxaAplicada = 0.08; 
} else if (salarioInformado <= 1500.00) { [cite: 112]
    taxaAplicada = 0.085;
} else if (salarioInformado > 1500.00) { [cite: 113]
    taxaAplicada = 0.09;
}

const valorDoDesconto = salarioInformado * taxaAplicada; [cite: 117]
const liqSalario = salarioInformado - valorDoDesconto; [cite: 118]

console.log("--- Detalhamento do Desconto Variável ---");
console.log("Salário Informado: R$ " + salarioInformado.toFixed(2)); [cite: 115]
console.log("Taxa de Desconto Aplicada: " + (taxaAplicada * 100).toFixed(1) + "%"); [cite: 116]
console.log("Valor do Desconto: R$ " + valorDoDesconto.toFixed(2)); [cite: 117]
console.log("Salário Líquido: R$ " + liqSalario.toFixed(2)); [cite: 118]