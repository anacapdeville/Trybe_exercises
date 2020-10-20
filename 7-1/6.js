let funcao = (string) => {
  let stringQualquer = 'Tryber x aqui!';
  let palavras = stringQualquer.split(' ');
  let stringFormada = '';
  for (let index = 0; index < palavras.length; index += 1) {
    if (palavras[index] == 'x') {
      palavras[index] = string;
    }
  stringFormada += palavras[index] + ' ';
  }
  return (stringFormada);
}

funcao ('bebeto');

let funcao2 = (funcao) => {
  let skills = ['JavaScript', 'HTML', 'CSS', 'Python', 'C++'];
  let skillsSort = skills.sort();
  let frase = '';
  frase = `${funcao}
  Minhas cinco principais habilidades são:
  ${skillsSort[0]}
  ${skillsSort[1]}
  ${skillsSort[2]}
  ${skillsSort[3]}
  ${skillsSort[4]}`
  console.log(frase)
}

funcao2 (funcao('bebeto'))