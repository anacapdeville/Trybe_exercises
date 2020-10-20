//Declarar o array
//Declarar uma variável referente ao maior número sendo igual a zero
//Criar um loop que percorre o array
//Incrementar a variável com o valor correspondente a cada loop
//Caso o elemento do array seja maior que o valor da variável, substitui-lo na varável
//Imprimir o valor da variável

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero=0;
for (let indice=0; indice<numbers.length; indice++) {
  if (numbers[indice]>maiorNumero){
    maiorNumero=numbers[indice]
  }
}
console.log(maiorNumero);