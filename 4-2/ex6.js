//Declarar o array
//Declarar uma variável referente ao número de números sendo igual a zero
//Criar um loop que percorre o array
//Incrementar a variável com o valor correspondente a cada loop
//Criar uma função if que analisa se o resto da divisão do número por 2 é diferente de zero
//Caso o módulo seja diferente de 2 a variável referente ao número de números ímpares deve receber um incremento
//Criar uma função if que analisa se a variável referente aos números ímpares é maior que zero
//Caso seja imprimir a quantidade de números ímpares
//Caso não seja imprimir "nenhum valor ímpar encontrado"

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares=0;
for (let indice=0; indice<numbers.length; indice++) {
  if (numbers[indice]%2 != 0){
    impares++
  }
}
if (impares>0) {
  console.log(impares)
}
else {
  console.log("nenhum valor ímpar encontrado")
}