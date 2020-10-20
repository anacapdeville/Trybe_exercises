let longestWord = (frase) => {
  let longest = '';
  let palavras = frase.split(' ');

  for (let i = 0; i < palavras.length; i += 1) {
    if (palavras[i].length > longest.length) {
      longest = palavras[i];
    }
  }
  console.log (longest)
}

longestWord ('Antônio foi no banheiro e não sabemos o que aconteceu');