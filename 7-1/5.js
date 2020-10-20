const btn = document.getElementById('btn');
let clickCount = 0;
let contagem = document.getElementById('contagem');

btn.addEventListener('click', () => {
  clickCount +=1;
  contagem.innerHTML = clickCount;
})