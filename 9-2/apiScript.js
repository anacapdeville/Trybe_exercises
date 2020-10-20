const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const appendJoke = (joke) => {
  let jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = joke;
}

const fetchJoke = () => {
  fetch(API_URL, myObject)
  .then(response => response.json())
  .then(data => {
    const joke = data.joke;
    appendJoke(joke)
  });
};

window.onload = () => fetchJoke();