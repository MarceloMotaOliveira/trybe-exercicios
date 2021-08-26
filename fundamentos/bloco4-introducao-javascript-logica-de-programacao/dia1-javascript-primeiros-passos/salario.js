// 11.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 0
let inss;
let ir;

if (salarioBruto > 0){
    if (salarioBruto <= 1556.94){
        inss = 8/100 * salarioBruto
    }
    else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
        inss = 9/100 * salarioBruto
    }
    else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
        inss = 11/100 * salarioBruto
    } else {
        inss = 570.88
    }

    let salarioDeduzidoInss = salarioBruto - inss

if (salarioDeduzidoInss <= 1903.98){
    ir = 0
}
else if (salarioDeduzidoInss > 1903.98 && salarioDeduzidoInss <= 2826.65){
    ir = (7.5/100*salarioDeduzidoInss) - 142.80
}
else if (salarioDeduzidoInss > 2826.65 && salarioDeduzidoInss <= 3751.05){
    ir = (15/100*salarioDeduzidoInss) - 354.80
}
else if (salarioDeduzidoInss > 3751.05 && salarioDeduzidoInss <= 4664.68){
    ir = (22.5/100*salarioDeduzidoInss) - 636.13
}
else {
    ir = (27.5/100*salarioDeduzidoInss) - 869.36
}

let salarioBase = salarioDeduzidoInss - ir

console.log(salarioBase)

} 
else {
    console.log("Erro: Salário precisa ser maior que zero")
}