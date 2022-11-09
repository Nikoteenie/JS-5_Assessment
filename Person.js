/*
  in this file, write your person class to be exported to your main.js file
  take care not to unintentionally change the name of the class or the export statement!!!
*/

export default class Person {
  constructor(firstName, lastName, age = true) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
}
