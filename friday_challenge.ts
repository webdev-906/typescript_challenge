// Create a class for a person that has properties for the person's name, age, and address.
// The class should have a method that takes a string as an argument and returns the person's name and address concatenated together.
// Use type annotations for the properties and method, and make sure to catch any errors that may occur when calling the method.


class Person {
  personName: string
  age: number
  address: string

  constructor(personName: string, age: number, address: string){
    this.personName = personName,
    this.age = age,
    this.address = address
  }

  personInfo(){
    return `${this.personName} is ${this.age} years old and lives at ${this.address}`
  }
}

const person1 = new Person('Chappy Smalls', 57, '123 main street');
console.log(person1.personInfo())