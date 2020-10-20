window.onload = function() {
  optionGenerate();
}

const selectArea = document.getElementById('estado');

function optionGenerate() {
  const estados = ['AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];
  for (let i=0; i < estados.length; i += 1) {
    const optionElement = document.createElement('option');
    optionElement.innerHTML = estados[i];
    optionElement.value = estados[i];
    selectArea.appendChild(optionElement);
  }
}

const submitButton = document.getElementById('submit-button');
const inputValues = document.querySelectorAll('input[type=text]');
const formDiv = document.querySelector('#form-done');

function catchText(event) {
  event.preventDefault();
  let arrayInput = [];
  for (let i = 0; i < inputValues.length; i+=1) {
    arrayInput.push(inputValues[i].value)
  }
  inputValues.innerHTML = '';
}

const radioValue = document.querySelectorAll('input[type=radio]');
const type1 = document.querySelector('#casa');
const type2 = document.querySelector('#apartamento');

function catchRadio(event) {
  event.preventDefault();
  let arrayRadio = [];
  if (type1.checked) {
    arrayRadio.push(type1.value);
  } else {
    arrayRadio.push(type2.value);
  }
}

submitButton.addEventListener('click', catchRadio)
