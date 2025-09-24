const students = [
  {
    id: 1,
    naam: 'Emma van Dijk',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.5,
    actief: true,
  },
  {
    id: 2,
    naam: 'Liam de Boer',
    leeftijd: 19,
    studie: 'Backend Development',
    cijfer: 7.2,
    actief: true,
  },
  {
    id: 3,
    naam: 'Sophie Jansen',
    leeftijd: 21,
    studie: 'Frontend Development',
    cijfer: 9.1,
    actief: false,
  },
  {
    id: 4,
    naam: 'Daan Peters',
    leeftijd: 22,
    studie: 'Fullstack Development',
    cijfer: 6.8,
    actief: true,
  },
  {
    id: 5,
    naam: 'Evi de Wit',
    leeftijd: 20,
    studie: 'Frontend Development',
    cijfer: 8.9,
    actief: true,
  },
];
function renderStudents(studentArray) {
  studentArray.forEach(student => {
    const status = student.actief ? "Actief" : "Inactief";
    console.log(`${student.naam} (${student.leeftijd} jaar)`);
    console.log(`${student.studie}`);
    console.log(`Cijfer: ${student.cijfer} | Status: ${status}`);
    console.log('------------------------');
  });
}
 
function toonAlleStudenten() {
  renderStudents(students);
}
 
function toonActieveStudenten() {
  const actieveStudents = students.filter(student => student.actief);
  renderStudents(actieveStudents);
}
 
function toonTopStudenten() {
  const topStudents = students.filter(student => student.cijfer >= 8.0);
  renderStudents(topStudents);
}
 
toonAlleStudenten();
 