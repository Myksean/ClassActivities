class Student {
  constructor(name, height, grade) {
    this.name = name;
    this.height = height;
    this.grade = grade;
  }
  intro() {
    return `Hello, ${this.name}. Welcome to grade ${this.grade}.`;
  }
}

const donnie = new Student("Donnie", "tall", "5");

console.log(donnie.intro());
