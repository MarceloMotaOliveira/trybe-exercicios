// 1. Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n .

let n = 5;
let linha = "";
let coluna = "";

if (n > 1){
    for (let index = 1; index <= n; index +=1){
         for (let i = 0; i <= n; i +=1){
            linha += "*"
         }
    console.log(linha); 
    linha = "";
    }

}
else {
    console.log("Erro! número precisa ser maior que 1")
}
console.log(linha);
console.log(coluna);