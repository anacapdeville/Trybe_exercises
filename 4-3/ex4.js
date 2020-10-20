let n=5;
let frase = "";
let asterisco = "*";
let espaco = " ";
let linha = 0;
let coluna = 0;
let meio = (n+1)/2;
let esquerdo = meio; 
let direito = meio;

let posicao = n;

for (linha=0; linha<n; linha++) {
  for (coluna=0; coluna<n; coluna++){
    if (coluna=meio){
      frase += "*";
    }
    else{
      frase += " ";
    }
  }

}