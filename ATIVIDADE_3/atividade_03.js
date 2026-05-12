let ganhoAnual = 0;
let gastoAnual = 0;
for (let i = 1; i <= 12; i++) {
    ganhoAnual += parseFloat(prompt(`Ganho bruto do mês ${i}:`));
    gastoAnual += parseFloat(prompt(`Gasto do mês ${i}:`));
}
let saldo = ganhoAnual - gastoAnual;
console.log(`Ganho Bruto Anual: R$ ${ganhoAnual.toFixed(2)}`);
console.log(`Gasto Anual: R$ ${gastoAnual.toFixed(2)}`);
console.log(`Saldo: R$ ${saldo.toFixed(2)}`);
console.log(saldo >= 0 ? "Status: Lucro" : "Status: Prejuízo");