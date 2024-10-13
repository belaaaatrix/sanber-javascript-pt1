// Class Induk (Parent)
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  // Class Anak (Child) yang mewarisi dari Animal
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);  // Memanggil constructor dari class induk
      this.breed = breed;
    }
  
    // Override metode speak
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  const myDog = new Dog('Rex', 'Golden Retriever');
  myDog.speak();  // Output: Rex barks.