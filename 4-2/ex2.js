//Declarar array
//Declarar uma variável referente a soma sendo igual a zero
//Criar um loop que percorre o array
//Incrementar a varável com o valor correspondente a cada loop
//Adicionar cada valor na variável da soma
//Imprimir o valor da soma

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let indice=0; indice<numbers.length; indice++){
  soma = soma + numbers[indice]
}
console.log(soma);