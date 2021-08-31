// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false

function palindromo (palavra) {
        let contrario = '';
        for (let i = palavra.length -1; i >=0; i -=1){
           contrario += (palavra[i]);
        };
        if (palavra === contrario){
           return console.log(true)
        }
        else {
            return console.log(false)
        };
};

palindromo("arara");
