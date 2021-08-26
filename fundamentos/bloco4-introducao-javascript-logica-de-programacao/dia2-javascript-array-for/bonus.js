let numbers = [5,9,3,19,70,8,100,2,35,27];

// 1.Ordene o array numbers em ordem crescente e imprima seus valores;

numbers.sort((a, b) => a - b);

console.log(numbers);

// 2.Ordene o array numbers em ordem decrescente e imprima seus valores;

numbers.sort((a, b) => b - a);
console.log(numbers)