// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

function maiorValor (numeros){
    let indiceMaior = 0;
    let numeroMaior = 0;
    for (let index = 0; index <= numeros.length -1; index +=1){
        if (numeros[index] > indiceMaior){
            indiceMaior = index;
            numeroMaior = numeros[index];
        }
        
    }
    return console.log(indiceMaior);           
}

let teste = [2, 10, 6, 7, 0, 1];

maiorValor(teste);