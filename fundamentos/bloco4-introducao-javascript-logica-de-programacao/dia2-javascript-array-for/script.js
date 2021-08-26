let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1.Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

// for (i=0; i < numbers.length; i+=1){
//     console.log(numbers[i]);
// }

// 2.Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
// let soma = 0;

// for (i=0; i < numbers.length; i+=1){
//      soma = soma + numbers[i];
// }
// console.log(soma);

// 3.Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

// let media = soma/numbers.length
// console.log(media);

//4.Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// if (media > 20){
//     console.log("Valor maior que 20");
// }
// else {
//     console.log("Valor menor ou igual a 20");
// }

// 5.Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let maior = 0;

// for (let n of numbers){
//     if (n > maior){
//         maior = n;
//     }
// }
// console.log(maior);

// 6.Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
// let contador = 0;

// for (let n of numbers){
//     if (n % 2 != 0){
//         contador +=1
//     }
// }
// if (contador > 0){
//     console.log(contador);
// }
// else {
//     console.log("Nenhum valor ímpar encontrado");
// }

// 7.Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let menor = 1000;

for (let n of numbers){
    if (n < menor){
        menor = n;
    }
}
console.log(menor);