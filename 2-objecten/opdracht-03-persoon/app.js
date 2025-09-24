// Person object
const person = {
  name: "Yassir Jorfi",
  age: 25,
  birthDate: "2000/09/23",
  gender: "Female",
  isAlive: true,
  hobbies: ["being late","gaming","anime","being stupid"],
 
  changeName: function(newName) {
    this.name = newName;
    displayPerson();
  },
  changeIsAlive: function(status) {
    this.isAlive = status;
    displayPerson();
  },
  addHobby: function(newHobby) {
    this.hobbies.push(newHobby);
    displayPerson();
  }
};
 

function displayPerson() {
  const container = document.getElementById("person");
  container.innerHTML =
    "<p><strong>Name:</strong> " + person.name + "</p>" +
    "<p><strong>Age:</strong> " + person.age + "</p>" +
    "<p><strong>Birthdate:</strong> " + person.birthDate + "</p>" +
    "<p><strong>Gender:</strong> " + person.gender + "</p>" +
    "<p><strong>Alive:</strong> " + (person.isAlive ? "Yes" : "No") + "</p>" +
    "<p><strong>Hobbies:</strong> " + person.hobbies.join(", ") + "</p>";
 
    console.log
}
 
 
displayPerson();