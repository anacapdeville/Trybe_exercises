//Declarar array
//Declarar uma variável referente a soma sendo igual a zero
//Criar um loop que percorre o array
//Incrementar a varável com o valor correspondente a cada loop
//Adicionar cada valor na variável da soma
//Declarar uma varável para a média aritmética
//Calcular a meédia arritmética
//Imprimir a média aritmética

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let indice=0; indice<numbers.length; indice++){
  soma = soma + numbers[indice];
}
let media= soma/numbers.length;
console.log(media);