class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(this.name + " ხმას გამოსცემს.");
    }
}

class Mammal extends Animal {
    constructor(name, hasHair = true) {
        super(name);
        this.hasHair = hasHair;
    }

    giveBirth() {
        console.log(this.name + " ცოცხლად იბადება.");
    }
}

class Dog extends Mammal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }

    speak() {
        console.log(this.name + " ყეფს.");
    }
}

const myDog = new Dog("რექსი", "გერმანული ცხვარი");
console.log("ჩემი ძაღლის სახელი არის " + myDog.name + ".");
console.log("ის არის " + myDog.breed + ".");
myDog.speak();
myDog.giveBirth();