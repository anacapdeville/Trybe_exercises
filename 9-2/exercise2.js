const generateNumber = () => {
  return Math.floor(Math.random() * 50)
}

const sumNumbers = () => {
  const array = [generateNumber(), generateNumber(), generateNumber(), generateNumber(), generateNumber(), generateNumber(), generateNumber(), generateNumber(), generateNumber(), generateNumber()];

  const numberSquare = array.map(number => Math.pow(number, 2));
  
  const getSum = (acc, number) => acc + number;

  const sum = numberSquare.reduce(getSum);

  return sum;
}

const fetchPromise = () => {
  const sum = sumNumbers()
  const myPromise = new Promise ((resolve, reject) => {
    (sum < 8000) ? resolve() : reject()
  });

  myPromise
  .thensum => [2, 3, 4, 10].map(number => sum / number)
  .catch(() => console.log('Deu ruim'))
}


fetchPromise()