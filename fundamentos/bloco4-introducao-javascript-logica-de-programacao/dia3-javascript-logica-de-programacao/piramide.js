// console.log("  *  ");
// console.log(" ***  ");
// console.log("*****");

let n = 5;
let centro = (n+1)/2;
let qtdDir = centro;
let qtdEsq = centro;

for (let linha = 1; linha <= n; linha +=2){
    for (let col = 1; col <= n; col +=1){
        if (col = centro){
            ast = "*";
        }
        else {
            ast += " ";
        }
    }
}