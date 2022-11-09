import Person from "./Person.js";
/*
  Here you will write your the functionality for your webpage

  I have already written the import and export statements for the Person class, so once you have it written in the other file it should be available here
*/
//

function createPerson() {
  let person = new Person();
  person.firstName = document.getElementById("firstName").value;
  person.lastName = document.getElementById("lastName").value;
  person.age = document.getElementById("age").value;

  let output = document.getElementById("return");

  if (
    person.firstName.length > 0 &&
    person.lastName.length > 0 &&
    person.age.length === 0
  ) {
    output.innerHTML =
      person.firstName + " " + person.lastName + "! " + "Whats your age?";
  } else if (
    person.firstName.length > 0 &&
    person.lastName.length > 0 &&
    person.age.length > 0
  ) {
    output.innerHTML =
      person.firstName +
      " " +
      person.lastName +
      "! " +
      "You are" +
      " " +
      person.age +
      " years old!";
  } else if (
    person.firstName.length === 0 &&
    person.lastName.length === 0 &&
    person.age.length === 0
  ) {
    output.innerHTML = null;
  }

  console.log(person);
}
let input = document.getElementById("button");
input.addEventListener("click", createPerson);
