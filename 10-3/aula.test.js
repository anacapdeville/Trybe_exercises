const randomNumber = () => {
  return Math.ceil((Math.random()*100));
}

const isDivisible = (number) => (randomNumber() % number) === 0