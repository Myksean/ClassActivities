// create an object literal

const animal = {
  name: "Rudy",
  age: 12,
  hobbies: ["Playing Catch", "Getting Belly Rubs"]
};

// include a method that uses "this"

const person = {
  name: "Cameron",
  birthOrder: "Baby",
  greet() {
    return `Good morning ${this.name}`;
  }
};
console.log(person.greet());

// create a function in the global scope that prints "this"

function logThis() {
  console.log("this is: ", this);
}

//logThis();
