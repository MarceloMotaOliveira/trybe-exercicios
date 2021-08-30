// console.log("    *");
// console.log("   **");
// console.log("  ***");
// console.log(" ****");
// console.log("*****");
let n = 5;
let qtd ="";
for (let li = n; li >= 1; li -=1){
    for (let col = 1; col <= n; col +=1){
        if (li <= col){
            qtd += "*"
        }
    else (qtd += " ");  
    }
    console.log(qtd);
    qtd ="";
}