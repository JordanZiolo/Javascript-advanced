// Opdracht 3.3: Template Literals
console.log('🚀 Opdracht 3.3: Template Literals');

const namen = ['Jan', 'Marie', 'Piet', 'Lisa'];
const leeftijden = [25, 30, 22, 28];
const steden = ['Amsterdam', 'Rotterdam', 'Utrecht', 'Den Haag'];

console.log('Namen:', namen);
console.log('Leeftijden:', leeftijden);
console.log('Steden:', steden);

// Maak beschrijvingen met template literals
const beschrijvingen = namen.map((naam, index) => {
    return `${naam} is ${leeftijden[index]} jaar oud en woont in ${steden[index]}.`;
});

// Print de beschrijvingen
beschrijvingen.forEach(beschrijving => {
    console.log(beschrijving);
});