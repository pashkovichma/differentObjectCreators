function getPersons(name, age) {

  // object literal
  const person1 = {
    name,
    age
  };

  //Object.assign()
  const person2 =  Object.assign({}, { name, age }); 

  //Object.create()
  const person3 = Object.create(person1);
  person3.name = name;
  person3.age = age;
  
  //constructor function
  function Person4(name, age) {
    this.name = name;
    this.age = age;
  }
  const person4 = new Person4(name, age);

  //class
  class Person5 {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  const person5 = new Person5(name, age);

  return [person1, person2, person3, person4, person5]
}
  
// Example usage:
const persons = getPersons("John Doe", 30);
console.log(persons);