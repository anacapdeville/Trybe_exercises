function endOfWord (word, ending) {
  let retorno=true;
  for (i=1; i<=ending.length; i+=1) {
    if (word[word.length-ending.length+i] !== ending[i]) {
      retorno=false;
  }
  }
  console.log (retorno)
}

endOfWord ("joaofernando", "fernan")