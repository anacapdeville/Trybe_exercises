function inteiros(value) {
  let vezesRepetidoAnterior=0;
  let vezesRepetidoAtual=0;
  let numeroMaisRepetido = value[0];

  for (let n=0; n<value.length-1; n+=1) {
    for (let j=n+1; j<value.length; j+=1) {
      if (value[n] === value[j]) {
        vezesRepetidoAtual +=1
      }
      if (vezesRepetidoAtual>vezesRepetidoAnterior) {
        vezesRepetidoAnterior = vezesRepetidoAtual
        numeroMaisRepetido = value[n]
      }
    }
  }
  console.log(numeroMaisRepetido);
}

inteiros([2, 3, 2, 5, 8, 2, 3])