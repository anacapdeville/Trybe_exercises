const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Exercício 1

const turno = (object, key, value) => {
  object[key] = value;
}

turno(lesson2, 'turno', 'manhã');
console.log(lesson2);

// Exercício 2

const listKeys = (objeto) => console.log(Object.keys(objeto));

listKeys(lesson3);

// Exercício 3

const sizeObject = (objeto) => {
  console.log(Object.keys(objeto).length);
}

sizeObject(lesson1);

// Exercício 4
const objectValues = (objeto) => console.log(Object.values(objeto));

objectValues(lesson1);

// Exercício 5

const allLessons = Object.assign({}, {lesson1}, {lesson2}, {lesson3});

console.log (allLessons)

// Exercício 7

const getValueByNumber = (obj, position) => {
  const values = Object.values(obj);
  return values[position];
}

console.log(getValueByNumber(lesson1, 0));

// Exercício 8
const verifyPair = (obj, key, value) => {
  let entries = Object.entries(obj);
  for (i in entries) {
    if (entries[i][0] === key && entries[i][1] === value)
    return true;
  }
  return false;
}

console.log(verifyPair(lesson3, 'turno', 'noite'));