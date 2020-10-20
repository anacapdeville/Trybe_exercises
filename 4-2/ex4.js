//Declarar array
//Declarar uma variável referente a soma sendo igual a zero
//Criar um loop que percorre o array
//Incrementar a varável com o valor correspondente a cada loop
//Adicionar cada valor na variável da soma
//Declarar uma varável para a média aritmética
//Calcular a meédia arritmética
//Criar um if com a condição da variável da média aritmética ser maior que 20
//Caso a média seja maior que 20 imprimir "valor maior que 20"
//Caso não obedeça a condição imprimir "valor menor ou igual a 20"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
for (let indice=0; indice<numbers.length; indice++){
  soma = soma + numbers[indice];
}
let media= soma/numbers.length;
if (media>20) {
  console.log("valor maior que 20");
}
else {
  console.log("valor menor ou igual a 20");
}