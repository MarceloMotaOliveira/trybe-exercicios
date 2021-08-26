// 6.Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.
// Exemplo: bishop (bispo) -> diagonals (diagonais)

let peca = "Cavalo".toLowerCase();

switch (peca){
    case "rei":
        console.log("Horizontal, vertical e diagonal");
        break;

    case "rainha":
        console.log("Horizontal, vertical e diagonal");
        break;

    case "bispo":
        console.log("Diagonal");
        break;

    case "cavalo":
        console.log("Em 'L'");
        break;

    case "torre":
        console.log("Horizontal e Vertical");
        break;
        
    case "peao":
        console.log("vertical");
        break;

    default:
        console.log("Peça inválida")
}