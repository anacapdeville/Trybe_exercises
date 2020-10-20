function maiorValor(value) {
  let maiorNumeroIndice=0
  for (n=0; n<value.length; n+=1) {
    if (value[maiorNumeroIndice]>value[n]) {
      maiorNumeroIndice = n;
    }
  }
  console.log(maiorNumeroIndice);
}

maiorValor ([2, 4, 6, 7, 10, 0, -3]);