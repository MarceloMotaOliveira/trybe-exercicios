// 8.Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let conjunto = [];

for (index = 1; index <= 25; index +=1){
conjunto.push(index);
}
console.log(conjunto);

// 9.Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let resp;

for (n of conjunto){
    resp = n /  2;
    console.log(n, "/ 2 = ", resp);
}