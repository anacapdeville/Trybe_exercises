const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

let show = (student) => {
  const arrayOfSkills = Object.keys(student);
  for (i in arrayOfSkills) {
    console.log(`${arrayOfSkills[i]}, Nível: ${student[arrayOfSkills[i]]}`)
  }
}

show(student1);