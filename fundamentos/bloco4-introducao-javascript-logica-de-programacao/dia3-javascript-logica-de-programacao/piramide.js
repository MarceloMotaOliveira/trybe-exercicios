// console.log("  *  ");
// console.log(" ***  ");
// console.log("*****");

let n = 5;
let centro = (n+1)/2;
let qtdDir = centro;
let qtdEsq = centro;

for (let linha = 1; linha <= n;linha +=2){
    for (let i = 1;i >= n;i+=1){
        if (qtdDir >= i){
         astDir = "*";
        }
    else {
        astDir = " ";
    }
    for (let index = 1; index <= n; index +=1){
        if (qtdEsq < index){
            astEsq = "*"
        }
    }
    console.log(astEsq);
}
}