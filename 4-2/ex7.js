//Declarar o array
//Declarar uma variável referente ao menor número sendo igual a 1000
//Criar um loop que percorre o array
//Incrementar a variável com o valor correspondente a cada loop
//Criar uma função if que analisa se o número é menor que o número que o número da variável
//Caso seja esse número deve substituir o número da variável
//Imprimir o menor número

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let smallestNumber=1000;
for (let index=0; index<numbers.length-1; index +=1) {
  if (numbers[index]<smallestNumber) {
    smallestNumber=numbers[index]
  }
}
console.log(smallestNumber)