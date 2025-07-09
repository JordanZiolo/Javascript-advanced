// Opdracht 3.4: Email Validatie
console.log('🚀 Opdracht 3.4: Email Validatie');

function valideerEmail(email) {
    // Schoon input op: verwijder spaties rondom en zet om naar kleine letters
    const schoonEmail = email.trim().toLowerCase();

    // Check of email een @ bevat
    if (!schoonEmail.includes('@')) return false;


    if (schoonEmail.includes(' ')) return false;


    const geldigeEindes = ['.com', '.nl', '.org'];
    const geldigEinde = geldigeEindes.some(einde => schoonEmail.endsWith(einde));
    return geldigEinde;
}

// Test de functie
const testEmails = ['jan@test.com', 'marie@voorbeeld.nl', 'fout@test.be', 'fout email@test.com'];
testEmails.forEach(email => {
    console.log(`${email}: ${valideerEmail(email)}`);
});