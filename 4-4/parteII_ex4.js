function nomes(value) {
  let tamanho = 0;
  let nomeMaiorQuantidade = value[0];
  for (n=1; n<=value[n].length-1; n+=1) {
    if (value[n].length>nomeMaiorQuantidade.length) {
      nomeMaiorQuantidade = value[n];
    }
  }
  console.log(nomeMaiorQuantidade);
}

nomes (['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])