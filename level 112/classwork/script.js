class Animal {
    constructor(name, species, habitat, photoUrl) {
        this.name = name;
        this.species = species;
        this.habitat = habitat;
        this.photoUrl = photoUrl;
    }

    displayInfo() {
        return `
        <div class='animal-card'>
            <img src='${this.photoUrl}' alt='${this.name}' class='animal-photo'>
            <div class='animal-name'>${this.name}</div>
            <div class='animal-species'>Species: ${this.species}</div>
            <div class='animal-habitat'>Habitat: ${this.habitat}</div>
        </div>
        `;
    }
}

class DangerousAnimal extends Animal {
    constructor(name, species, habitat, isEndangered, photoUrl) {
        super(name, species, habitat, photoUrl);
        this.isEndangered = isEndangered;
    }

    displayInfo() {
        return `
        <div class='animal-card dangerous'>
            <img src='${this.photoUrl}' alt='${this.name}' class='animal-photo'>
            <div class='animal-name'>${this.name}</div>
            <div class='animal-species'>Species: ${this.species}</div>
            <div class='animal-habitat'>Habitat: ${this.habitat}</div>
            <div class='animal-status'>Status: ${this.isEndangered ? "Endangered" : "Not Endangered"}</div>
        </div>
        `;
    }
}

class AnimalStore {
    constructor(arr) {
        this.animals = arr;
    }

    render() {
        let main = document.getElementById("animal-list");
        this.animals.forEach(animal => {
            main.innerHTML += animal.displayInfo();
        });
    }
}

const animals = [
    new Animal("Lion", "Mammal", "Savannah", "https://funnypicture.org/wallpaper/2015/05/funny-lions-9-free-wallpaper.jpg"),
    new Animal("Penguin", "Bird", "Antarctica", "https://i.pinimg.com/originals/be/c2/3d/bec23da3fff1ac182899e3d9f3c78858.jpg"),
    new DangerousAnimal("Tiger", "Mammal", "Jungles", true, "https://thumbs.dreamstime.com/b/angry-tiger-roars-fiercely-close-portrait-roaring-144107633.jpg"),
    new Animal("Elephant", "Mammal", "Grasslands", "https://i.pinimg.com/originals/09/c8/ea/09c8ea1a1fc10cb9f0ff00deb1d1019b.jpg"),
    new DangerousAnimal("Gorilla", "Mammal", "Forest", true, "https://i.pinimg.com/originals/8f/51/75/8f5175c2d641ec083e3bf367a1113746.jpg"),
    new Animal("Kangaroo", "Mammal", "Australia", "https://assets-natgeotv.fnghub.com/Photos/51/129045.jpg")
];

new AnimalStore(animals).render();
