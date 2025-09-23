const marvels = ["Avengers age of ultron","Avengers end game","Iron man","Capitain America civil war" ]
// Maak een arrow function genaamd 'addMarvel'
const addmarvel = () => {
    marvels.push('Fantastic Four')
}    

addmarvel(); 
// Loop met een for/of loop door de array en toon alle items in de array in je console
for (let marvelfilm of marvels) {
    console.log(marvelfilm)
}