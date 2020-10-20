let n=7;
let linhaAsteriscos=1;

for (let i=n; i>0; i-=2) {
  let frase = "";
  
  if (i>1) {
    for (let j=1;j<=(i-1)/2; j+=1)
    frase += " ";
  }
  for (let k=1; k<=linhaAsteriscos; k+=1) {
    frase += "*";
  }
  console.log(frase);
  linhaAsteriscos +=2;
}
