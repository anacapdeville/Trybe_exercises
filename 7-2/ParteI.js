let newFunction = () => {
  let object = {
    key1: 'value1',
  }
  object.key2 = 'value2';
  return object;
}

console.log(newFunction());