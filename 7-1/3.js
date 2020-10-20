let fatorial = (number) => {
  let operacao = 1;
  for (number; number > 0; number -= 1) {
    operacao = operacao*number;
  }
  console.log(operacao);
}
